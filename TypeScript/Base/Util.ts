
export = Util;

class Util {
    constructor() { }

    public isNumeric(input: any) {
        return !isNaN(parseFloat(input)) && isFinite(input);
    }
}