
import Cache = require("Base/Cache");
import UrlManager = require("Base/UrlManager");
import Util = require("Base/Util");

export = TS;

class TS {
    public cache: Cache;
    public urlManager: UrlManager;
    public util: Util;

    constructor() {
        this.cache = new Cache();
        this.urlManager = new UrlManager();
        this.util = new Util();
    }

    static app: TS = new TS();
}