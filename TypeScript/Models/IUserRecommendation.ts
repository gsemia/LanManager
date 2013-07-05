
import ko = require("Libraries/knockout");
import IModel = require("Models/IModel");

export = IUserRecommendation;

interface IUserRecommendation extends IModel {
    user: IModel;
    recommendation: IModel;
}