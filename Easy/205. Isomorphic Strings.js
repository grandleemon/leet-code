var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length !== t.length) return false;
    // Create two maps for s & t strings...
    const map1 = {};
    const map2 = {};
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        console.log(map1, map2)

        // Compare the maps, if not equal, return false...
        if(map1[s[idx]] !== map2[t[idx]]) return false;
        // Insert each character if string s and t into seperate map...

        if(!map1[s[idx]]) map1[s[idx]] = 0
        if(!map2[t[idx]]) map2[t[idx]] = 0

        map1[s[idx]] = idx + 1;
        map2[t[idx]] = idx + 1;

    }
    return true;    // Otherwise return true...
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"))