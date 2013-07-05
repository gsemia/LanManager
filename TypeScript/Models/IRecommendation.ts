
import ko = require("Libraries/knockout");
import IModel = require("Models/IModel");
import IUserRecommendation = require("Models/IUserRecommendation");

export = IRecommendation;

interface IRecommendation extends IModel {
    event: IModel;
    game: IModel;

    userRecommendations: IUserRecommendation[];
}