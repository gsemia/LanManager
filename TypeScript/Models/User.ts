
import ko = require("Libraries/knockout");
import kov = require("Libraries/knockoutValidation");
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
    public errorMessages = ko.observableArray<string>();
    
    public displayLevel: KnockoutComputed<string>;
    public editingMode = ko.observable<boolean>();
    public usernameEntered = ko.observable<boolean>(false);
    public nameEntered = ko.observable<boolean>(false);
    public emailEntered = ko.observable<boolean>(false);

    public invitations = ko.observableArray<IInvitation>();
    public ratings = ko.observableArray<IRating>();

    public levels = [
        { level: 0, title: "Boon" },
        { level: 1, title: "Pro" },
        { level: 9, title: "Godmode" },
    ];

    constructor(data?: IUser) {
        super();
        data = data || <IUser>{};
        this.id(data.id || -1);
        this.username(data.username || "");
        this.username.subscribe((newValue: string) => {
            this.usernameEntered(true);
            if (newValue != newValue.trim()) {
                this.username(newValue.trim());
            }
        });
        this.email(data.email || "");
        this.email.subscribe((newValue: string) => {
            this.emailEntered(true);
            if (newValue != newValue.trim()) {
                this.email(newValue.trim());
            }
        });
        this.name(data.name || "");
        this.name.subscribe((newValue: string) => {
            this.nameEntered(true);
            if (newValue != newValue.trim()) {
                this.name(newValue.trim());
            }
        });
        this.password(data.password || "");
        this.level(data.level || 0);

        this.displayLevel = ko.computed<string>(() => {
            return Enumerable.from<Level>(this.levels).singleOrDefault((level: Level) => { return level.level == this.level(); }, { level: -1, title: ""}).title;
        });
    }

    public isAdmin() {
        return this.level() == 9;
    }

    public validate() {
        var valid = true;
        var messages: string[] = [];
        if (this.username().length == 0) {
            valid = false;
            if (this.usernameEntered())
                messages.push("Username must not be empty");
        }
        if (this.email().length == 0) {
            valid = false;
            if (this.emailEntered())
                messages.push("Email address must not be empty");
        }
        if (this.email().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/ig) != null) {
            valid = false;
            if (this.nameEntered())
                messages.push("A valid email address must be entered");
        }
        if (Enumerable.from<User>(this.userList()).where((user: User) => {
            return user.username() == this.username() || user.email() == this.email();
        }).count() > 0) {
            valid = false;
            if (this.usernameEntered() && this.emailEntered())
                messages.push("Username and email address must be unique");
        }
        this.errorMessages(messages);
        return valid;
    }
}

interface Level {
    level: number;
    title: string;
}