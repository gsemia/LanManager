
import ko = require("Libraries/knockout");
import IModel = require("Models/IModel");
import IRating = require("Models/IRating");
import IRecommendation = require("Models/IRecommendation");

export = IGame;

interface IGame extends IModel {
    id: number;
    name: string;
    description: string;

    ratings: IRating[];
    recommendations: IRecommendation[];
}