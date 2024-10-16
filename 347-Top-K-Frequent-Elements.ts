function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    for (let num of nums) map.set(num, 1 + (map.get(num) ?? 0))
    const arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
    return arr.slice(0, k).map(x => x[0])
};