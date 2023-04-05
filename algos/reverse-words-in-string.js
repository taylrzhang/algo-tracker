/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim().replace(/  +/g, " ").split(" ");
  // const arr = [];
  // s.split(" ").forEach((el) => {
  //   console.log(el, el.length)
  //   if (el.length > 0) arr.push(el);
  // });
  // console.log( arr);

  let left = 0,
    right = s.length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s.join(" ");
};

console.log(reverseWords(" Hello World "));
console.log(reverseWords("The quick brown fox jumped over the lazy dog"));
console.log(reverseWords("To be, or not to be"));
console.log(reverseWords("  hello   world! "));
