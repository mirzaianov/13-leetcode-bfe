// #1

// const reverseBits = function (n) {
//     let result = 0;

//     for (let i = 0; i < 32; i++) {
//         // take the i bit from the end then perform & with ...000001
//         // to obtain ...000000 or ...000001 as the i bit from the end of n.
//         const bit = (n >> i) & 1;
//         // Perform the OR | operator with result to append the bit
//         // at index i position by shifting left bit (31 -i)
//         result = result | (bit << (31 - i));
//     }
//     // For keeping the sign for the result.
//     return result >>> 0;
// };

// #2

const reverseBits = function (n) {
    n = n.toString(2).split('');
    let left = 0;
    let right = n.length;

    while (left < right) {
        [n[left], n[right]] = [n[right], n[left]];
        left++;
        right--;
    }

    return parseInt(n.join('').padEnd(32, '0'), 2);
};

console.log(reverseBits(00000010100101000001111010011100)); // 964176192
console.log(reverseBits(11111111111111111111111111111101)); // 3221225471
