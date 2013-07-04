define(["require", "exports", "Base/Cache", "Base/UrlManager"], function(require, exports, __Cache__, __UrlManager__) {
    var Cache = __Cache__;
    var UrlManager = __UrlManager__;

    

    var TS = (function () {
        function TS() {
            this.cache = new Cache();
            this.urlManager = new UrlManager();
        }
        TS.app = new TS();
        return TS;
    })();
    return TS;
});
//@ sourceMappingURL=TS.js.map
