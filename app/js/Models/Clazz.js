var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Models/Model"], function(require, exports, __Model__) {
    var Model = __Model__;
    

    

    var Clazz = (function (_super) {
        __extends(Clazz, _super);
        function Clazz(data) {
            _super.call(this);
            data = data || {};

            this.name = data.name || '';
            this.description = data.description || '';
            this.role = data.role || '';
            this.alignment = data.alignment || '';
            this.hitDie = data.hitDie || '';
        }
        return Clazz;
    })(Model);
    return Clazz;
});
//@ sourceMappingURL=Clazz.js.map
