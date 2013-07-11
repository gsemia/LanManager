
import ko = require("Libraries/knockout");
import IInvitation = require("Models/IInvitation");
import IModel = require("Models/IModel");
import IRating = require("Models/IRating");

export = IUser;

interface IUser extends IModel {
    id: number;
    username: string;
    email: string;
    name: string;
    level: number;

    invitations?: IInvitation[];
    ratings?: IRating[];
}