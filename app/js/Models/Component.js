var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Models/Model"], function(require, exports, __Model__) {
    var Model = __Model__;
    

    

    var Component = (function (_super) {
        __extends(Component, _super);
        function Component(data) {
            _super.call(this);
            data = data || {};

            this.name = data.name || '';
            this.description = data.description || '';
        }
        return Component;
    })(Model);
    return Component;
});
//@ sourceMappingURL=Component.js.map
