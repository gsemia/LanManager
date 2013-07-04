define(["require", "exports", "Libraries/knockout", "Models/Spell", "Importer/PathfinderPage", "TS", "Base/Url"], function(require, exports, __ko__, __Spell__, __PathfinderPage__, __TS__, __Url__) {
    var ko = __ko__;
    
    var Spell = __Spell__;
    var PathfinderPage = __PathfinderPage__;
    var TS = __TS__;
    var Url = __Url__;

    

    var SpellImport = (function () {
        function SpellImport() {
            var _this = this;
            this.created = false;
            this.spells = ko.observableArray([]);
            this.requestCounter = 0;
            this.completedRequestCounter = 0;
            this.urlList = {};
            this.runnable = ko.observable(false);
            this.isMapping = ko.observable(false);
            this.urls = [];
            TS.app.urlManager.get('Import/Spell/SpellLists', function (data) {
                data.forEach(function (url) {
                    _this.urls.push(new Url(url));
                });
                _this.runnable(true);
                _this.created = true;
            });

            this.counter = ko.computed(function () {
                return _this.completedRequestCounter + '/' + _this.requestCounter;
            });
            this.importFinished = ko.computed(function () {
                return _this.created && _this.requestCounter > 0 && _this.requestCounter == _this.completedRequestCounter;
            });
            this.mappingFinished = ko.computed(function () {
                return _this.importFinished() && _this.isMapping() == false;
            });
        }
        SpellImport.prototype.startImport = function () {
            var _this = this;
            this.runnable(false);

            this.urls.forEach(function (url) {
                PathfinderPage.query(url, function (page) {
                    page.searchDocument('a[href*="spells/"], a[href*="featuredRaces/"]').each(function (i, element) {
                        _this.importSpell(new Url(page.resolveAddress($(element).attr('href'))));
                    });
                });
            });
        };

        SpellImport.prototype.startMapping = function () {
            var _this = this;
            if (this.importFinished()) {
                this.isMapping(true);
                TS.app.urlManager.get('Import/Spell/MapSpells', function (data) {
                    data.forEach(function (spell) {
                        console.log(spell);
                    });
                    _this.isMapping(false);
                });
            }
        };

        SpellImport.prototype.importSpell = function (spellUrl) {
            var _this = this;
            if (!(spellUrl.baseAddress in this.urlList)) {
                ++this.requestCounter;
                this.urlList[spellUrl.baseAddress] = true;

                TS.app.urlManager.get('Import/Spell/Import', function (data) {
                    ++_this.completedRequestCounter;

                    data.forEach(function (entry) {
                        _this.spells.push(new Spell(entry));
                        _this.spells.sort(function (left, right) {
                            return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1);
                        });
                    });
                    _this.startMapping();
                }, { url: spellUrl.baseAddress });
            }
        };
        return SpellImport;
    })();
    return SpellImport;
});
//@ sourceMappingURL=SpellImport.js.map
