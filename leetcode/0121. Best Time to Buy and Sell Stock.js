// const maxProfit = function (prices) {
//     let accum = [];

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] > prices[i]) {
//                 accum.push(prices[j] - prices[i]);
//             }
//         }
//     }

//     if (accum.length > 0) {
//         return Math.max(...accum);
//     } else {
//         return 0;
//     }
// };

// const maxProfit = function (prices) {
//     let max = 0,
//         min = prices[0];

//     for (let i = 1; i < prices.length; i++) {
//         let price = prices[i];

//         max = Math.max(max, price - min);
//         min = Math.min(min, price);

//         console.log(`price: ${price}, max: ${max}, min: ${min}`);
//     }

//     return max;
// };

// const maxProfit = function (prices) {
//   let min = prices[0],
//     max = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const cur = prices[i];

//     min = Math.min(min, cur);
//     max = Math.max(max, cur - min);
//   }

//   return max;
// };

// const maxProfit = function (prices) {
//   if (prices.length === 1) {
//     return 0;
//   }

//   let l = 0;
//   let r = 1;
//   let maxProfit = 0;

//   while (r < prices.length) {
//     if (prices[l] >= prices[r]) {
//       l = r;
//       r++;
//       continue;
//     }

//     const profit = prices[r] - prices[l];

//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }

//     r++;
//   }

//   return maxProfit;
// };

// #2

const maxProfit = function (prices) {
  let min = Infinity,
    max = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
