define(["require", "exports", "Base/Runner", "Knockout/KnockoutMapper"], function(require, exports, __Runner__, __KnockoutMapper__) {
    var Runner = __Runner__;
    var KnockoutMapper = __KnockoutMapper__;

    var runner = new Runner();
    runner.register(new KnockoutMapper());
    runner.execute();

    console.log('BaseConfig Running');
});
//@ sourceMappingURL=BaseConfig.js.map
