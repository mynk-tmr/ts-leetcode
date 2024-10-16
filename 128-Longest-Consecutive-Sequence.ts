function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let maxlen = 0;
    for (let val of set.values()) {
        if (set.has(val - 1)) continue;
        let seqStart = val, len = 0;
        while (set.delete(seqStart++)) len++;
        maxlen = Math.max(len, maxlen)
    }
    return maxlen;
};

// For a val, if val-1 is absent in Set, that val is a start of a new sequence. Keep deleting next sequentials and compute maxlen when seq ends