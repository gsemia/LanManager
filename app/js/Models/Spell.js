var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Models/Model", "Models/SpellComponent", "Models/ClassSpell"], function(require, exports, __Model__, __SpellComponent__, __ClassSpell__) {
    var Model = __Model__;
    
    var SpellComponent = __SpellComponent__;
    var ClassSpell = __ClassSpell__;

    

    var Spell = (function (_super) {
        __extends(Spell, _super);
        function Spell(data) {
            _super.call(this);
            data = data || {};

            this.name = data.name || "";
            this.description = data.description || "";
            this.school = data.school || "";
            this.subschool = data.subschool || "";
            this.type = data.type || "";
            this.castingTime = data.castingTime || "";
            this.range = data.range || "";
            this.target = data.target || "";
            this.effect = data.effect || "";
            this.duration = data.duration || "";
            this.savingThrow = data.savingThrow || "";
            this.spellResistance = data.spellResistance || "";

            var components = data.components || [];
            this.components = components.map(function (value) {
                return new SpellComponent(value);
            });

            var classes = data.classes || [];
            this.classes = classes.map(function (value) {
                return new ClassSpell(value);
            });
        }
        return Spell;
    })(Model);
    return Spell;
});
//@ sourceMappingURL=Spell.js.map
