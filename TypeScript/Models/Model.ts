
import ko = require("Libraries/knockout");

var ko: KnockoutStatic = ko;

export = Model;

class Model {
    public visible = ko.observable<boolean>(true);

    constructor() { }

    public show() {
        this.visible(true);
    }

    public hide() {
        this.visible(false);
    }
}