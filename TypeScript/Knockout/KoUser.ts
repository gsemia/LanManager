
import ko = require("Libraries/knockout");
import Enumerable = require("Libraries/linq");
import TS = require("TS");
import IUser = require("Models/IUser");
import User = require("Models/User");

var Enumerable: linqjs.Enumerable = Enumerable;
var ko: KnockoutStatic = ko;

export = KoUser;

class KoUser {
    public users = ko.observableArray<User>();
    public currentUser = ko.observable<User>();
    public isAdmin: KnockoutComputed<boolean>;
    public userCreationFormVisible = ko.observable(false);
    public userAddable: KnockoutComputed<boolean>;

    public formUser = new User();
    public formUserValidation: KnockoutComputed<boolean>;

    constructor() {
        this.isAdmin = ko.computed(() => {
            return this.currentUser() && this.currentUser().isAdmin();
        });
        this.formUserValidation = ko.computed(() => {
            return this.formUser.validate();
        });
        this.userAddable = ko.computed(() => {
            return this.isAdmin() && !this.userCreationFormVisible();
        });

        TS.app.urlManager.get<IUser>("user/current", (data: IUser) => {
            this.currentUser(new User(data));
        });
        TS.app.urlManager.get<IUser[]>("user/get", (data: IUser[]) => {
            this.users(ko.utils.arrayMap(data, (user: IUser) => { return new User(user); }));
            this.formUser.userList = this.users;
        });

        // KnockoutBinding Workaround
        this.showEdit = this.showEdit.bind(this);
    }

    public addUser() {
        this.userCreationFormVisible(true);
    }

    public commitUser() {

    }

    public showEdit(user: User) {
        this.users().forEach((value: User) => {
            if (value.id() == user.id()) {
                value.editingMode(true);
            } else {
                value.editingMode(false);
            }
        });
    }
}