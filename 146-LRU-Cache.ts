class LRUCache {
    private cache = new Map()
    constructor(private capacity: number) {
    }
    private shift(key: number, value: number) {
        this.cache.delete(key);
        this.cache.set(key, value); //to last
    }

    get(key: number): number {
        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.shift(key, value)
        return value;
    }

    put(key: number, value: number): void {
        this.shift(key, value)
        if(this.cache.size > this.capacity) {
            const lru = this.cache.keys().next().value;
            this.cache.delete(lru)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */