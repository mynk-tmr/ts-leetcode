function dailyTemperatures(T: number[]): number[] {
    const stack = [] as number[], dist = Array(T.length).fill(0)
    const top = () => T[stack.at(-1)]
    T.forEach((val, i) => {
        while (stack.length && top() < val) {
            const idx = stack.pop()
            dist[idx] = i - idx;
        }
        stack.push(i)
    })
    return T.map((_, i) => dist[i])
};
