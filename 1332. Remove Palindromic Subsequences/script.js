var removePalindromeSub = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return 2;
  }

  return 1;
};
