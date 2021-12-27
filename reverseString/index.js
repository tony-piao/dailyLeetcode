/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if(s.length === 1) return s;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;

    left++
    right--
  }

  return s;
};