/**
 * You are given a string S. Suppose a character c occurs consecutively X times in the string. Replace these consecutive occurrences of the character c with (X,c) in the string


 * @param {character[]} chars
 * @return {number}
 */

//i: chars = ["a","a","b","b","c","c","c"]
//o: 6 ("a2b2c3")
const compress = (chars) => {
  //one char: return 1
  //multi chars: return char + number occurs = 1 + ...
  //append to s

  //declare a variable curr to store curr char
  //declare times to store the curr char occurs times
  //loop though chars
  //check if curr is the same, if so times increase by1
  //else,
  //check if the times is 1, ifso, append curr
  //else times is more than 1, append curr, append splited times
  //reassign curr as new vhar, times as 1
  //return s

  let curr = chars[0],
    times = 0,
    s = "";
  if (chars.length === 1) return 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === curr) {
      times++;
    } else {
      if (times === 1) {
        s += curr;
      }
      curr = chars[i];
      times = 1;
    }
  }
  s += curr;
  for (let j = 0; j < times.toString().length; j++) {
    s += times.toString()[j];
  }
  return s.length;
};

// console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); //->6
// console.log(compress(["a"])); //->6
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);

const num = 122;
console.log(num % 10, Math.floor(num / 10));
