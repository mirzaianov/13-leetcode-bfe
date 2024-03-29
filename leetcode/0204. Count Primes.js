// const countPrimes = function (n) {
//     const isPrime = new Array(n).fill(true);

//     isPrime[0] = false;
//     isPrime[1] = false;

//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (!isPrime[i]) continue;

//         for (let j = i; j * i < n; j++) {
//             isPrime[j * i] = false;
//         }
//     }

//     return isPrime.reduce((count, isPrime) => {
//         if (isPrime) count++;
//         return count;
//     }, 0);
// };

const countPrimes = function (n) {
    const store = new Array(n).fill(true);

    store[0] = false;
    store[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (store[i] === false) continue;

        for (let j = i; j * i < n; j++) {
            store[j * i] = false;
        }
    }

    return store.filter((item) => item === true).length;
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0
