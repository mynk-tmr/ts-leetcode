function evalRPN(tokens: string[]): number {
    const calc = ['+', '-', '*', '/']
    const stack = [] as number[]
    const push = (x : string) => stack.push(Number.parseInt(x)) //required here
    for (let token of tokens) {
        if (!calc.includes(token)) push(token)
        else {
            const b = stack.pop(), a = stack.pop()
            const expr = '(' + a + ')' + token + '(' + b + ')'
            push(eval(expr))
        }
    }
    return stack.at(-1)
};