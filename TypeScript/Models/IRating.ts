
import ko = require("Libraries/knockout");
import IModel = require("Models/IModel");

export = IRating;

interface IRating extends IModel {
    user: IModel;
    game: IModel;
    rating: number;
}