define(["require", "exports"], function(require, exports) {
    

    var Thread = (function () {
        function Thread(callback, interval) {
            var _this = this;
            this.callback = callback;
            this.interval = interval || 1000;

            this.executingFunction = function () {
                _this.callback();
                _this.timeoutVariable = setTimeout(_this.executingFunction, _this.interval);
            };
        }
        Thread.prototype.start = function () {
            this.executingFunction();
        };

        Thread.prototype.stop = function () {
            clearTimeout(this.timeoutVariable);
        };
        return Thread;
    })();
    return Thread;
});
//@ sourceMappingURL=Thread.js.map
