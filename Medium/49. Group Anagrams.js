// 49. Group Anagrams
// Medium
// 14.1K
// 415
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//
//     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
//     Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
//
// Input: strs = [""]
// Output: [[""]]
// Example 3:
//
// Input: strs = ["a"]
// Output: [["a"]]
//
//
// Constraints:
//
//     1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    const hashObj = {}
    const res = []
    for(let i = 0; i < strs.length; i++) {
        const stringSorted = strs[i].split("").sort().join("")

        if(!hashObj[stringSorted]) hashObj[stringSorted] = []
        hashObj[stringSorted] = [...hashObj[stringSorted], strs[i]]
    }

    for(const i in hashObj) {
        res.push(hashObj[i])
    }

    return res
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))