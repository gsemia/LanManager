define(["require", "exports", "Libraries/jquery"], function(require, exports, __$__) {
    var $ = __$__;

    

    var UrlManager = (function () {
        function UrlManager() {
            this.baseUrl = $('#requirejs').data('baseurl');
            if (this.baseUrl.length > 0 && this.baseUrl.charAt(this.baseUrl.length - 1) == '/')
                this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
        }
        UrlManager.prototype.getSiteAddress = function (address) {
            if (address.charAt(0) == '/')
                address = address.substring(1);
            return this.baseUrl + '/' + address;
        };

        UrlManager.prototype.get = function (address, success, data) {
            $.get(this.getSiteAddress(address), data || {}, success, 'json');
        };

        UrlManager.prototype.post = function (address, data, success) {
            $.post(this.getSiteAddress(address), data, success || function () {
            }, 'json');
        };
        return UrlManager;
    })();
    return UrlManager;
});
//@ sourceMappingURL=UrlManager.js.map
