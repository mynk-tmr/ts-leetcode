type T = { value: number, use: number; };
type keys = number;

class LFUCache {
  table = new Map<keys, T>();
  fqmap = {} as Record<string, Set<keys>>;
  minfq = 1;
  constructor(private capacity: number) { }

  private increment(key: keys, item: T) {
    this.fqmap[item.use]?.delete(key);
    this.fqmap[++item.use] ??= new Set();
    this.fqmap[item.use].add(key);
    if (this.fqmap[this.minfq].size === 0) this.minfq++;
  }

  get(key: keys) {
    const item = this.table.get(key);
    if (!item) return -1;
    this.increment(key, item);
    return item.value;
  }

  put(key: keys, value: number) {
    if (this.table.has(key)) {
      const item = this.table.get(key)!;
      this.increment(key, item);
      item.value = value;
      return;
    }
    if (this.capacity === this.table.size) {
      const lfuSet = this.fqmap[this.minfq];
      const lfu = lfuSet.values().next().value!;
      lfuSet.delete(lfu);
      this.table.delete(lfu);
    }
    this.table.set(key, { value, use: 1 });
    this.fqmap[1] ??= new Set();
    this.fqmap[1].add(key);
    this.minfq = 1;
  }
}