// 35. Search Insert Position
// Easy
// 11.4K
// 522
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
//     You must write an algorithm with O(log n) runtime complexity.
//
//
//
//     Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4
//
//
// Constraints:
//
//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) return i
        if(nums[i] < target && (nums[i + 1] > target || nums[i + 1] === undefined)) {
            return i + 1
        }
    }

    return 0
};

//binary search O(log n)
//
// var searchInsert = function(nums, target) {
//     let lo = 0, hi = nums.length; // we might need to inseart at the end
//     while(lo < hi) { // breaks if lo == hi
//         let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
//         if (target > nums[mid]) {
//             lo = mid + 1 // no way mid is a valid option
//         } else {
//             hi = mid // it might be possibe to inseart @ mid
//         }
//     }
//     return lo;
// };