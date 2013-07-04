
import store = require("Libraries/store");

export = Cache;

class Cache {
    private defaultExpire: number;
    private storage;

    constructor(defaultExpireInSeconds?: number) {
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

    public valid(key: string): bool {
        var entry = this.storage.get(key);
        if (entry instanceof CacheEntry) {
            if (entry.valid()) {
                return true;
            } else {
                this.remove(key);
            }
        }

        return false;
    }

    public get(key: string) {
        return this.valid(key) ? this.storage.get(key).getValue() : null;
    }

    public set(key: string, value: any, expireInSeconds?: number) {
        this.storage.set(key, new CacheEntry(value, (expireInSeconds || this.defaultExpire) * 1000));
    }

    public remove(key: string) {
        this.storage.remove(key);
    }
}

class LocalStorageSimulator {
    private storage: Object = {};

    public clear() {
        this.storage = {};
    }

    public get(key: string): string {
        if (key in this.storage)
            return this.storage[key];
        return '';
    }

    public remove(key: string) {
        if (key in this.storage)
            delete this.storage[key];
    }

    public set(key: string, value: any) {
        this.storage[key] = value;
    }
}

class CacheEntry {
    private expireTime: number;
    private value: any;

    constructor(input: any, timeout: number) {
        this.value = input;
        this.expireTime = Date.now() + timeout;
    }

    public valid() {
        return Date.now() < this.expireTime;
    }

    public getValue() {
        return this.value;
    }
}