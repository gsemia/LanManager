var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Models/Clazz"], function(require, exports, __Clazz__) {
    var Clazz = __Clazz__;
    

    

    var ClassSpell = (function (_super) {
        __extends(ClassSpell, _super);
        function ClassSpell(data) {
            _super.call(this, data);
            data = data || {};

            this.level = data.level;
        }
        return ClassSpell;
    })(Clazz);
    return ClassSpell;
});
//@ sourceMappingURL=ClassSpell.js.map
