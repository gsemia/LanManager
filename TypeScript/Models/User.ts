
import ko = require("Libraries/knockout");
import kov = require("Libraries/knockoutValidation");
import IPost = require("Base/IPost");
import TS = require("TS");
import Enumerable = require("Libraries/linq");
import IInvitation = require("Models/IInvitation");
import IRating = require("Models/IRating");
import IUser = require("Models/IUser");
import Model = require("Models/Model");

var Enumerable: linqjs.Enumerable = Enumerable;
var ko: KnockoutStatic = ko;

export = User;

class User extends Model {
    public id = ko.observable<number>();
    public username = ko.observable<string>();
    public email = ko.observable<string>();
    public name = ko.observable<string>();
    public level = ko.observable<number>();
    
    public displayLevel: KnockoutComputed<string>;

    public userList = ko.observableArray<User>();
    public reference: User;

    public invitations = ko.observableArray<IInvitation>();
    public ratings = ko.observableArray<IRating>();

    private validator: KnockoutObservableBase;

    public levels = [
        { level: 0, title: "Boon" },
        { level: 1, title: "Pro" },
        { level: 9, title: "Godmode" },
    ];

    constructor(data?: User);
    constructor(data?: IUser);
    constructor(data?: any) {
        super();
        data = data || {};
        if (data instanceof User) {
            this.reference = data;
            data = {
                id: data.id(),
                username: data.username(),
                email: data.email(),
                name: data.name(),
                level: data.level(),
            };
        }

        this.id(data.id || -1);
        this.username(data.username || "");
        this.email(data.email || "");
        this.name(data.name || "");
        this.level(data.level || 0);

        this.applyValidationRules();

        this.displayLevel = ko.computed<string>(() => {
            return Enumerable
                .from<Level>(this.levels)
                .singleOrDefault(
                    (level: Level) => {
                        return level.level == this.level();
                    }, { level: -1, title: "" }
                )
                .title;
        });
    }

    public isAdmin() {
        return this.level() == 9;
    }

    public validate() {
        return this.validator.isValid();
    }

    public save(callback?: (success: boolean, message: string, isNew: boolean) => void ) {
        callback = callback || (success: boolean, message: string) => { };

        if (TS.app.util.isNumeric(this.id()) && this.id() > 0) {
            TS.app.urlManager.post<IPost>("user/update",
                {
                    "User": {
                        id: this.id(),
                        username: this.username(),
                        name: this.name(),
                        email: this.email(),
                        level: this.level(),
                    }
                },
                (data: IPost) => {
                    if (data.success)
                        this.updateReference();
                    callback(data.success, data.message || "", false);
                });
        } else {
            TS.app.urlManager.post<IPost>("user/create",
                {
                    "User": {
                        username: this.username(),
                        name: this.name(),
                        email: this.email(),
                        level: this.level(),
                    }
                },
                (data: IPost) => {
                    if (data.success) {
                        var id = data.id || -1;
                        if (TS.app.util.isNumeric(id) && id > 0) {
                            this.id(id);
                        }
                    }
                    callback(data.success, data.message || "", true);
                });
        }
    }

    public update(data: IUser) {
        this.username(data.username);
        this.name(data.name);
        this.email(data.email);
        this.level(data.level);
        this.applyValidationRules();
    }

    private applyValidationRules() {        
        var collection = () => { return this.userList; };

        this.username.extend({ validatable: false });
        this.username.extend({
            required: true,
            unique: {
                collection: collection,
                valueAccessor: (user: User) => { return user.username(); },
                externalValue: this.username(),
            },
        });

        this.email.extend({ validatable: false });
        this.email.extend({
            required: true,
            email: true,
            unique: {
                collection: collection,
                valueAccessor: (user: User) => { return user.email(); },
                externalValue: this.email(),
            },
        });

        this.validator = ko.validatedObservable({
            username: this.username,
            email: this.email,
        });
    }

    private updateReference() {
        if (this.reference) {
            this.reference.username(this.username());
            this.reference.name(this.name());
            this.reference.email(this.email());
            this.reference.level(this.level());
        }
    }
}

interface Level {
    level: number;
    title: string;
}