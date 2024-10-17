function subarraySum(nums: number[], k: number): number {
    let curr_sum = 0, count = new Map(), total = 0;
    count.set(curr_sum, 1)
    for (let i = 0; i < nums.length; i++) {
        curr_sum += nums[i]
        let k_count = count.get(curr_sum - k);
        if (k_count) total += k_count;
        count.set(curr_sum, 1 + (count.get(curr_sum) ?? 0))
    }
    return total
};

//use a map to store running sums upto each index
//if for an i, somewhere a running sum of sum-k is present
//we know from @ to i, sum is k. 

function getLongestSubarraySumtoK(arr, k) {
    let map = new Map(), csum = 0, maxlen = 0;
    for(let i=0; i<arr.length; i++) {
       csum+= arr[i];
       let pre = map.get(csum - k);
       if(pre !== undefined) maxlen = Math.max(maxlen, i - pre)
       if(!map.has(csum)) map.set(csum, i)
       if(csum === k) maxlen = Math.max(maxlen, i+1)
    }
    return maxlen
}

//update indexmap only once (for the farthest occurence of sum)
