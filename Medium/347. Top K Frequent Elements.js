// 347. Top K Frequent Elements
// Medium
// 12.6K
// 464
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//
//
//
//     Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
//
//
// Constraints:
//
//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
//
//
//     Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function(nums, k) {
    const hashMap = new Map();
    const temp = [];
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        if(!hashMap.get(nums[i])) hashMap.set(nums[i], 0);
        hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    }

    for(const [key, value] of hashMap.entries()) {
        temp.push({key, value})
    }

    temp.sort((a, b) => a.value - b.value)

    for(let i = k; i > 0; i--) {
        result.push(temp.pop().key)
    }

    return result;
};

console.log(topKFrequent([1,2], 2))