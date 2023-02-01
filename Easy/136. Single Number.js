var singleNumber = function(nums) {
    const hash = {}

    for(let i = 0; i < nums.length; i++) {
        if(!hash[nums[i]]) hash[nums[i]] = 0
        hash[nums[i]] += 1
    }

    console.log(hash)

    for(const i in hash) {
       if(hash[i] === 1) return i
    }

    return nums[0]
};

console.log(singleNumber([-1,-1,-2]))