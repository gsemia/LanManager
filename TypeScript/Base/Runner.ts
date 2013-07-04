
import IRunnable = require("Base/IRunnable");

export = Runner;

class Runner {
    private runnables: IRunnable[] = [];

    constructor() { }

    public register(runnable: IRunnable) {
        this.runnables.push(runnable);
    }

    public execute() {
        this.runnables.forEach(function (runnable) { runnable.run(); });
    }
}