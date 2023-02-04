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