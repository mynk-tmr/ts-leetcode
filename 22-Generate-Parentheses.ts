function generateParenthesis(N: number): string[] {
    //str, count of left, right paras in str
    let stack = [['(', 1, 0]], ans = []
    while (stack.length) {
        const [str, lf, rt] = stack.pop() as [string, number, number]
        if (str.length === 2 * N) ans.push(str)
        if (lf < N) stack.push([str + '(', lf + 1, rt])
        if (rt < lf) stack.push([str + ')', lf, rt + 1])
    }
    return ans;
};