
import ko = require("Libraries/knockout");
import $ = require("Libraries/bootstrap");
import Enumerable = require("Libraries/linq");
import TS = require("TS");
import IUser = require("Models/IUser");
import Thread = require("Base/Thread");
import User = require("Models/User");

var Enumerable: linqjs.Enumerable = Enumerable;
var ko: KnockoutStatic = ko;
var $: JQueryStatic = $;

export = KoUser;

class KoUser {
    public users = ko.observableArray<User>();
    public currentUser = ko.observable<User>();
    public isAdmin: KnockoutComputed<boolean>;
    public userAddable: KnockoutComputed<boolean>;
    
    public formUser = ko.observable<User>(new User());
    public formUserValidation: KnockoutComputed<boolean>;
    public formIsUploading = ko.observable<boolean>(false);

    private usersUpdateThread: Thread;

    constructor() {
        this.isAdmin = ko.computed(() => {
            return this.currentUser() && this.currentUser().isAdmin();
        });
        this.formUserValidation = ko.computed(() => {
            return this.formUser().validate();
        });

        TS.app.urlManager.get<IUser>("user/current", (data: IUser) => {
            this.currentUser(new User(data));
        });
        
        this.usersUpdateThread = new Thread(this.getUsers.bind(this), 10000);
        this.usersUpdateThread.start();

        $("#formUser").on("show", () => {
            this.usersUpdateThread.stop();
        }).on("hidden", () => {
            this.usersUpdateThread.start();
        });


        // KnockoutBinding Workaround
        this.editUser = this.editUser.bind(this);
    }

    private getUsers() {
        TS.app.urlManager.get<IUser[]>("user/get", (data: IUser[]) => {
            this.users(ko.utils.arrayMap(data, (user: IUser) => {
                try {
                    var updateUser = Enumerable.from<User>(this.users()).single((u: User) => { return user.id == u.id(); });
                    updateUser.update(user);
                    return updateUser;
                } catch (e) {
                    return new User(user);
                }
            }));
            this.formUser().userList = this.users;
        });
    }

    public editUser(user: User) {
        if (this.isAdmin()) {
            var ref = new User(user);
            ref.userList = this.users;
            this.formUser(ref);
            $("#formUser").modal("show");
        }
    }

    public commitUser() {
        this.formIsUploading(true);
        this.formUser().save((success: boolean, message: string, isNew: boolean) => {
            this.formIsUploading(false);
            if (success) {
                $("#formUser").modal("hide");
                if (isNew) {
                    this.users.push(this.formUser());
                }

                this.formUser(new User());
                this.formUser().userList = this.users;
            } else {
                alert(message);
            }
        });
    }
}