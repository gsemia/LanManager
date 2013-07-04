var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Models/Component"], function(require, exports, __Component__) {
    
    var Component = __Component__;

    

    var SpellComponent = (function (_super) {
        __extends(SpellComponent, _super);
        function SpellComponent(data) {
            _super.call(this, data);
            data = data || {};

            this.comment = data.comment;
        }
        return SpellComponent;
    })(Component);
    return SpellComponent;
});
//@ sourceMappingURL=SpellComponent.js.map
