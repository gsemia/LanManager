define(["require", "exports", "Libraries/knockout"], function(require, exports, __ko__) {
    var ko = __ko__;

    var ko = ko;

    

    var Model = (function () {
        function Model() {
            this.visible = ko.observable(true);
        }
        Model.prototype.show = function () {
            this.visible(true);
        };

        Model.prototype.hide = function () {
            this.visible(false);
        };
        return Model;
    })();
    return Model;
});
//@ sourceMappingURL=Model.js.map
