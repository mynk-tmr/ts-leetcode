function dailyTemperatures(T: number[]): number[] {
    const stack = [] as number[][], map = Array(T.length).fill(0)
    T.forEach((val, i) => {
        while (stack.length && stack.at(-1)[1] < val) {
            const [idx, _] = stack.pop()
            map[idx] = i - idx;
        }
        stack.push([i, val])
    })
    return T.map((_, i) => map[i])
};