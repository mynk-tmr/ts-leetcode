function isPalindrome(s: string): boolean {
    let t = '';
    for (let ch of s) if (/[a-z0-9]/i.test(ch)) t += ch.toLowerCase();
    let a = -1, b = t.length;
    while (++a < --b)
        if (t[a] !== t[b]) return false;
    return true;
};