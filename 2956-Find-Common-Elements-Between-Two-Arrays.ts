function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1), set2 = new Set(nums2)
    let ct1 = 0, ct2 = 0;
    for (let val of nums1) if (set2.has(val)) ++ct1;
    for (let val of nums2) if (set1.has(val)) ++ct2;
    return [ct1, ct2]
};