// 67. Add Binary
// Easy
// 6.6K
// 695
// Companies
// Given two binary strings a and b, return their sum as a binary string.
//
//
//
//     Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//
//
// Constraints:
//
//     1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
//     Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//     const binaryA = parseInt(a, 2)
//     const binaryB = parseInt(b, 2)
//     const sum = binaryA + binaryB
//     return sum.toString(2)
// };

var addBinary = function(a, b) {
    const binaryA = `0b${a}`
    const binaryB = `0b${b}`
    const sum = BigInt(binaryA) + BigInt(binaryB)
    return sum.toString(2)
};

console.log(addBinary("1010", "1011"))