define(["require", "exports", "Libraries/knockout", "Models/Spell", "TS"], function(require, exports, __ko__, __Spell__, __TS__) {
    var ko = __ko__;
    
    var Spell = __Spell__;
    var TS = __TS__;

    var ko = ko;

    

    var SpellIndex = (function () {
        function SpellIndex() {
            this.spells = ko.observableArray([]);
            this.name = ko.observable('');
            this.school = ko.observable('');
            this.subschool = ko.observable('');
            this.type = ko.observable('');
            this.castingTime = ko.observable('');
            this.range = ko.observable('');
            this.target = ko.observable('');
            this.effect = ko.observable('');
            this.duration = ko.observable('');
            this.savingThrow = ko.observable('');
            this.spellResistance = ko.observable('');
            this.clazz = ko.observable('');
            this.level = ko.observable('');
            this.component = ko.observable('');
            this.componentDetail = ko.observable('');
            this.searchVisible = ko.observable(false);
            this.loading = ko.observable(false);
            this.name.subscribe(this.getSpells.bind(this));
            this.school.subscribe(this.getSpells.bind(this));
            this.subschool.subscribe(this.getSpells.bind(this));
            this.type.subscribe(this.getSpells.bind(this));
            this.castingTime.subscribe(this.getSpells.bind(this));
            this.range.subscribe(this.getSpells.bind(this));
            this.target.subscribe(this.getSpells.bind(this));
            this.effect.subscribe(this.getSpells.bind(this));
            this.duration.subscribe(this.getSpells.bind(this));
            this.savingThrow.subscribe(this.getSpells.bind(this));
            this.spellResistance.subscribe(this.getSpells.bind(this));
            this.clazz.subscribe(this.getSpells.bind(this));
            this.level.subscribe(this.getSpells.bind(this));
            this.component.subscribe(this.getSpells.bind(this));
            this.componentDetail.subscribe(this.getSpells.bind(this));
        }
        SpellIndex.prototype.getSpells = function () {
            var _this = this;
            this.loading(true);
            TS.app.urlManager.get('Spell/Get', function (data) {
                var receivedSpells = ko.utils.arrayMap(data, function (spell) {
                    return new Spell(spell);
                });
                receivedSpells.sort(function (left, right) {
                    return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1);
                });
                _this.spells(receivedSpells);

                //this.spells.push.apply(this.spells, receivedSpells);
                _this.loading(false);
            }, {
                'Spell': {
                    'name': this.name(),
                    'school': this.school(),
                    'subschool': this.subschool(),
                    'type': this.type(),
                    'castingTime': this.castingTime(),
                    'range': this.range(),
                    'target': this.target(),
                    'effect': this.effect(),
                    'duration': this.duration(),
                    'savingThrow': this.savingThrow(),
                    'spellResistance': this.spellResistance(),
                    'class': this.clazz(),
                    'level': this.level(),
                    'component': this.component(),
                    'componentDetail': this.componentDetail()
                }
            });
        };

        SpellIndex.prototype.toggleSearch = function () {
            this.searchVisible(!this.searchVisible());
        };
        return SpellIndex;
    })();
    return SpellIndex;
});
//@ sourceMappingURL=SpellIndex.js.map
