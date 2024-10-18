function largestRectangleArea(heights: number[]): number {
    const stack = [] as number[][]
    let max = 0
    heights.push(0) //added to empty stack when no more bars
    heights.forEach((ht, i) => {
        let first = i; //see below
        while (stack.length && stack.at(-1)[1] > ht) {
            let [pos, H] = stack.pop(), W = i - pos;
            max = Math.max(max, W * H)
            first = pos;
        }
        stack.push([first, ht])
    })
    return max;
};

/* a next smaller element problem, 

we can stack heights as long as they're ascending as the smallest in 
stack is upper bound of H and W is distance from it to recent

why first? each time we pop a bar, we say -
 hey remove this 6 since < 2 (current), and put a 2 in it's place
 the first occurence of 2 is now 6's position
 in this way, when 2 is popped later, instead of considering only 1 box of heigh 2, we consider (i - 2's first) boxes of height 2, this gives a valid area
*/