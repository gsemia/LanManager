
import ko = require("Libraries/knockout");
import IInvitation = require("Models/IInvitation");
import IRating = require("Models/IRating");
import IUser = require("Models/IUser");
import Model = require("Models/Model");

var ko: KnockoutStatic = ko;

export = User;

class User extends Model {
    public id = ko.observable<number>();
    public username = ko.observable<string>();
    public email = ko.observable<string>();
    public name = ko.observable<string>();
    public password = ko.observable<string>();
    public level = ko.observable<number>();

    public invitations = ko.observableArray<IInvitation>();
    public ratings = ko.observableArray<IRating>();

    constructor(data?: IUser) {
        super();
        data = data || <IUser>{};
        this.id(data.id);
        this.username(data.username);
        this.email(data.email);
        this.name(data.name);
        this.password(data.password);
        this.level(data.level);
    }
}