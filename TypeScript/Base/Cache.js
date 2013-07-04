define(["require", "exports", "Libraries/store"], function(require, exports, __store__) {
    var store = __store__;

    

    var Cache = (function () {
        function Cache(defaultExpireInSeconds) {
            this.defaultExpire = (defaultExpireInSeconds || 6 * 60 * 60);
            if (store.enabled) {
                this.storage = store;
            } else {
                this.storage = new LocalStorageSimulator();
            }

            if (location.hash.indexOf('clearCache') > -1) {
                this.storage.clear();
            }
        }
        Cache.prototype.valid = function (key) {
            var entry = this.storage.get(key);
            if (entry instanceof CacheEntry) {
                if (entry.valid()) {
                    return true;
                } else {
                    this.remove(key);
                }
            }

            return false;
        };

        Cache.prototype.get = function (key) {
            return this.valid(key) ? this.storage.get(key).getValue() : null;
        };

        Cache.prototype.set = function (key, value, expireInSeconds) {
            this.storage.set(key, new CacheEntry(value, (expireInSeconds || this.defaultExpire) * 1000));
        };

        Cache.prototype.remove = function (key) {
            this.storage.remove(key);
        };
        return Cache;
    })();

    var LocalStorageSimulator = (function () {
        function LocalStorageSimulator() {
            this.storage = {};
        }
        LocalStorageSimulator.prototype.clear = function () {
            this.storage = {};
        };

        LocalStorageSimulator.prototype.get = function (key) {
            if (key in this.storage)
                return this.storage[key];
            return '';
        };

        LocalStorageSimulator.prototype.remove = function (key) {
            if (key in this.storage)
                delete this.storage[key];
        };

        LocalStorageSimulator.prototype.set = function (key, value) {
            this.storage[key] = value;
        };
        return LocalStorageSimulator;
    })();

    var CacheEntry = (function () {
        function CacheEntry(input, timeout) {
            this.value = input;
            this.expireTime = Date.now() + timeout;
        }
        CacheEntry.prototype.valid = function () {
            return Date.now() < this.expireTime;
        };

        CacheEntry.prototype.getValue = function () {
            return this.value;
        };
        return CacheEntry;
    })();
    return Cache;
});
//@ sourceMappingURL=Cache.js.map
