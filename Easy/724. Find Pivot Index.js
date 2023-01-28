// 724. Find Pivot Index
// Easy
// 6.1K
// 644
// Companies
// Given an array of integers nums, calculate the pivot index of this array.
//
//     The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
//
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
//
//     Return the leftmost pivot index. If no such index exists, return -1.
//
//
//
// Example 1:
//
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
//     The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:
//
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
//     There is no index that satisfies the conditions in the problem statement.
//     Example 3:
//
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
//     The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
//
//
// Constraints:
//
//     1 <= nums.length <= 104
//     -1000 <= nums[i] <= 1000
//
//
// Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/

const pivotIndex = (nums) => {
    // We have not started our program yet, so values are at 0
    let rightSum = 0;
    let leftSum = 0;

    // Calculate the sum of the entire array
    // O(n)
    nums.forEach(v => rightSum += v);

    // O(n)
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        // The right sum no longer contains the curr number
        rightSum -= curr;

        // if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;

        // We did not find a match
        // Left sum now contains our curr number
        leftSum += curr;
    }

    return -1;
};

const res = pivotIndex([1,2,2,3])
console.log(res)