define(["require", "exports", "Base/Cache", "Base/UrlManager", "Base/Util"], function(require, exports, __Cache__, __UrlManager__, __Util__) {
    var Cache = __Cache__;
    var UrlManager = __UrlManager__;
    var Util = __Util__;

    

    var TS = (function () {
        function TS() {
            this.cache = new Cache();
            this.urlManager = new UrlManager();
            this.util = new Util();
        }
        TS.app = new TS();
        return TS;
    })();
    return TS;
});
//@ sourceMappingURL=TS.js.map
