var removeTrailingZeros = function (num) {
  const arr = num.split('');

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != 0) break;

    if (arr[i] == 0) {
      arr.pop();
    }
  }

  return arr.join('');
};
