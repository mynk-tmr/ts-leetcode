function twoSum(nums: number[], target: number): number[] {
    const map = new Map() //store {value, index}
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        if (map.has(need)) return [i, map.get(need)]
        else map.set(nums[i], i)
    }
    return []
};