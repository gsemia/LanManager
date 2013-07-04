
import Runner = require("Base/Runner");
import KnockoutMapper = require("Knockout/KnockoutMapper");

var runner = new Runner();
runner.register(new KnockoutMapper());
runner.execute();

console.log('BaseConfig Running');