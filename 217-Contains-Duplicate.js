/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniq = new Set(nums);
    return uniq.size < nums.length
};