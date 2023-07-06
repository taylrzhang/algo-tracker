/** 20
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //check valid with stack
  //edge case: if its the first one and its close brac, return false
  //check the last el in stack matching with it or not, if so pop one from stack
  const parenMap = { ")": "(", "]": "[", "}": "{" };
  let stack = [];

  for (let c of s) {
    if (parenMap[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === parenMap[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
