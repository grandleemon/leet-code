var lengthOfLastWord = function(s) {
    const array = s.trim().split("")
    for(let i = 0; i < array.length; i++) {
        if(array[i] === " " && array[i + 1] === " ") {
            array.splice(i, 1)
            i--
        }
    }

    return array.join("").split(" ").at(-1).length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))