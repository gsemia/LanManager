
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
    public password = ko.observable<string>();
    public level = ko.observable<number>();

    public userList = ko.observableArray<User>();
        
    public displayLevel: KnockoutComputed<string>;
    public editingMode = ko.observable<boolean>();

    public invitations = ko.observableArray<IInvitation>();
    public ratings = ko.observableArray<IRating>();

    private validator: KnockoutObservableBase;

    public levels = [
        { level: 0, title: "Boon" },
        { level: 1, title: "Pro" },
        { level: 9, title: "Godmode" },
    ];

    constructor(data?: IUser) {
        super();
        data = data || <IUser>{};
        var collection = () => { return this.userList; };
        this.id(data.id || -1);
        this.username(data.username || "");
        this.username.extend({
            required: true,
            unique: {
                collection: collection,
                valueAccessor: (user: User) => { return user.username(); },
                externalValue: true,
            },
        });
        this.email(data.email || "");
        this.email.extend({
            required: true,
            email: true,
            unique: {
                collection: collection,
                valueAccessor: (user: User) => { return user.email(); },
                externalValue: true,
            },
        });
        this.name(data.name || "");
        this.password(data.password || "");
        this.level(data.level || 0);

        this.validator = ko.validatedObservable({
            username: this.username,
            email: this.email,
        });

        this.displayLevel = ko.computed<string>(() => {
            return Enumerable.from<Level>(this.levels).singleOrDefault((level: Level) => { return level.level == this.level(); }, { level: -1, title: ""}).title;
        });
    }

    public isAdmin() {
        return this.level() == 9;
    }

    public validate() {
        return this.validator.isValid();
    }

    public save(callback?: (success: boolean, message: string, id: number) => void ) {
        callback = callback || (success: boolean, message: string) => { };
        TS.app.urlManager.post<IPost>("user/create", {
            "User": {
                username: this.username(),
                name: this.name(),
                email: this.email(),
                level: this.level(),
            }
        }, (data: IPost) => {
            callback(data.success, data.message || "", data.id || -1);
        });
    }

    static clone(user: User) {
        return new User({
            id: user.id(),
            username: user.username(),
            name: user.name(),
            email: user.email(),
            level: user.level(),
        });
    }
}

interface Level {
    level: number;
    title: string;
}