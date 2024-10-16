class MyHashMap {
    map = {}
    put(key: number, value: number): void {
        this.map[key] = value;
    }

    get(key: number): number {
        return this.map[String(key)] ?? -1;
    }

    remove(key: number): void {
        if(this.map[String(key)]) 
            delete this.map[String(key)]
    }
}