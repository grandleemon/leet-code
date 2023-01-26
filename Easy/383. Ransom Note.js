// 383. Ransom Note
// Easy
// 3.6K
// 397
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//
//     Each letter in magazine can only be used once in ransomNote.
//
//
//
//     Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
//
//
// Constraints:
//
//     1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

const canConstruct = function(ransomNote, magazine) {
    const obj1 = {}
    const obj2 = {}

    for(let i=0; i<ransomNote.length; i++) {
        if(obj1[ransomNote[i]]===undefined){
            obj1[ransomNote[i]]=1
        } else {
            obj1[ransomNote[i]]++;
        }
    }

    for(let i=0; i<magazine.length; i++) {
        if(obj2[magazine[i]]===undefined){
            obj2[magazine[i]]=1
        } else {
            obj2[magazine[i]]++;
        }
    }

    for(let key in obj1) {
        if(obj2[key]===undefined || obj1[key] > obj2[key]){
            return false;
        }
    }

    return true;
};

const check = canConstruct("aacczq", "abczxcsd")
console.log(check)