var repeatedCharacter = function(s) {
    const hashMap = new Map();

    for(let i = 0; i < s.length; i++) {
        if(!hashMap.get(s[i])) hashMap.set(s[i], 0);
        hashMap.set(s[i], hashMap.get(s[i]) + 1);
        if(hashMap.get(s[i]) === 2) return s[i]
    }
};

console.log(repeatedCharacter("abccbaacz"))