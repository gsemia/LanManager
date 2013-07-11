
export = Thread;

class Thread {
    private callback;
    private interval;
    private timeoutVariable;
    private executingFunction;

    constructor(callback: () => void, interval?: number) {
        this.callback = callback;
        this.interval = interval || 1000;
        
        this.executingFunction = () => {
            this.callback();
            this.timeoutVariable = setTimeout(this.executingFunction, this.interval);
        };
    }

    public start() {
        this.executingFunction();
    }

    public stop() {
        clearTimeout(this.timeoutVariable);
    }
}