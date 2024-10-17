function firstUniqChar(s: string): number {
    let ctMap = {}, i = 0;
    for (let i = 0; i < s.length; i++)
        ctMap[s[i]] = 1 + (ctMap[s[i]] ?? 0)
    for (let i = 0; i < s.length; i++)
        if (ctMap[s[i]] === 1) return i;
    return -1;
};