class MinStack {
    stack = [] as { val: number, min: number }[]
    push(val: number): void {
        this.stack.push({ val, min: Math.min(this.getMin(), val) })
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack.at(-1)?.val ?? Infinity
    }

    getMin(): number {
        return this.stack.at(-1)?.min ?? Infinity
    }
}