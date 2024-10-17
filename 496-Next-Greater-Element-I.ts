function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    //stack should contain items in decreasing order
    const stack = [], NGE = new Map<number, number>()
    for (let val of nums2) {
        while (stack.length && stack.at(-1) < val)
            NGE.set(stack.pop(), val)  //I am bigger than them all
        stack.push(val)
    }
    return nums1.map(x => NGE.get(x) ?? -1 )
};