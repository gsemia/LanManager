define(["require", "exports"], function(require, exports) {
    

    var Util = (function () {
        function Util() {
        }
        Util.prototype.isNumeric = function (input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        };
        return Util;
    })();
    return Util;
});
//@ sourceMappingURL=Util.js.map
