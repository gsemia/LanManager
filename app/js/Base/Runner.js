define(["require", "exports"], function(require, exports) {
    

    

    var Runner = (function () {
        function Runner() {
            this.runnables = [];
        }
        Runner.prototype.register = function (runnable) {
            this.runnables.push(runnable);
        };

        Runner.prototype.execute = function () {
            this.runnables.forEach(function (runnable) {
                runnable.run();
            });
        };
        return Runner;
    })();
    return Runner;
});
//@ sourceMappingURL=Runner.js.map
