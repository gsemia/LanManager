
import ko = require("Libraries/knockout");
import IModel = require("Models/IModel");

export = IInvitation;

interface IInvitation extends IModel {
    user: IModel;
    event: IModel;
    status: number;
}