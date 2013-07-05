
import ko = require("Libraries/knockout");
import IInvitation = require("Models/IInvitation");
import IModel = require("Models/IModel");
import IRecommendation = require("Models/IRecommendation");

export = IEvent;

interface IEvent extends IModel {
    id: number;
    start: string;
    end: string;
    description: string;

    invitations: IInvitation[];
    recommendations: IRecommendation[];
}