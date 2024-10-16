function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const X = getFreqMap(s), Y = getFreqMap(t)
    for (let key of X.keys()) {
        if (X.get(key) !== Y.get(key)) return false;
    }
    return true;
};

function getFreqMap(a: string) {
    const map = new Map()
    for (let ch of a) map.set(ch, (map.get(ch) ?? 0) + 1)
    return map;
}