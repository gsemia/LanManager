define(["require", "exports", "Libraries/jquery", "TS", "Base/Url"], function(require, exports, __$__, __TS__, __Url__) {
    var $ = __$__;
    var TS = __TS__;
    var Url = __Url__;

    

    var PathfinderPage = (function () {
        function PathfinderPage(url, document) {
            this.url = url;
            this.document = document;
            console.log('PathfinderPage: ' + url.baseAddress);
        }
        PathfinderPage.query = function (url, callback) {
            TS.app.urlManager.get('Import/Base/GetContent', function (data) {
                callback(new PathfinderPage(url, data.html));
            }, { address: url.baseAddress });
        };

        PathfinderPage.prototype.resolveAddress = function (input) {
            return this.url.resolveAddress(input);
        };

        PathfinderPage.prototype.getDocument = function () {
            return $(this.document);
        };

        PathfinderPage.prototype.searchDocument = function (search) {
            return $(search, this.getDocument());
        };
        return PathfinderPage;
    })();
    return PathfinderPage;
});
//@ sourceMappingURL=PathfinderPage.js.map
