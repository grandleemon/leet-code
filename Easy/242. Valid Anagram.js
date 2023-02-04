// 242. Valid Anagram
// Easy
// 8.1K
// 262
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
//     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
//     Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
//
//
// Constraints:
//
//     1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
//
//
//     Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
//
//
//     for(let i = 0; i <= s.length; i++) {
//         if(t.includes(s[i])) {
//             t = t.replace(s[i], "")
//         }
//     }
//
//     return t.length === 0;
// };

var isAnagram = function (s, t) {
    if(s.length !== t.length) return false;
    const hashS = new Map()
    const hashT = new Map()

    for (let i = 0; i < s.length; i++) {
        if(!hashS.has(s[i])) hashS.set(s[i], 0)
        hashS.set(s[i], hashS.get(s[i]) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        if(!hashT.has(t[i])) hashT.set(t[i], 0)
        hashT.set(t[i], hashT.get(t[i]) + 1)
    }

    for(const [key, value] of hashS) {
        if(hashT.get(key) === value) {
            hashT.delete(key)
        }
    }

    return hashT.size === 0
};

console.log(isAnagram("anagram", "nagaram"))