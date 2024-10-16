function groupAnagrams(strs: string[]): string[][] {
    const ans = {}
    for (let str of strs) {
        const sorted = str.split('').sort().join('')
        if (sorted in ans) ans[sorted].push(str)
        else ans[sorted] = [str]
    }
    return Object.values(ans)
};