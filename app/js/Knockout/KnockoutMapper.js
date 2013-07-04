define(["require", "exports", "Libraries/jquery", "Libraries/knockout"], function(require, exports, __$__, __ko__) {
    /// <reference path="../Scripts/typings/requirejs/require.d.ts"/>
    var $ = __$__;
    var ko = __ko__;
    

    var $ = $;

    

    var KnockoutMapper = (function () {
        function KnockoutMapper() {
        }
        KnockoutMapper.prototype.run = function () {
            KnockoutMapper.apply();
        };

        KnockoutMapper.apply = function () {
            $('.knockout').each(function (index, element) {
                $(element).removeClass('knockout');
                var koFile = $(element).data('ko');
                if (koFile.length > 0) {
                    try  {
                        require(['Knockout/' + koFile], function (KnockoutClass) {
                            ko.applyBindings(new KnockoutClass(), element);
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        };
        return KnockoutMapper;
    })();
    return KnockoutMapper;
});
//@ sourceMappingURL=KnockoutMapper.js.map
