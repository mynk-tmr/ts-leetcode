class MyHashSet {
    set = {}
    add(key: number): void {
        this.set[key] = null;
    }

    remove(key: number): void {
        delete this.set[key]
    }

    contains(key: number): boolean {
        return String(key) in this.set
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */