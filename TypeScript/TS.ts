
import Cache = require("Base/Cache");
import UrlManager = require("Base/UrlManager");

export = TS;

class TS {
    public cache: Cache;
    public urlManager: UrlManager;

    constructor() {
        this.cache = new Cache();
        this.urlManager = new UrlManager();
    }

    static app = new TS();
}