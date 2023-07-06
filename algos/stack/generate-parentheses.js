function generate(n) {
  let stack = [];
  let res = [];

  function backtrack(openNum, closeNum) {
    // console.log(stack)
    if (openNum === n && closeNum === n) {
      res.push(stack.join(""));
      return;
    }
    if (openNum < n) {
      stack.push("(");
      backtrack(openNum + 1, closeNum);
      stack.pop();
    }
    if (closeNum < openNum) {
      stack.push(")");
      backtrack(openNum, closeNum + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
}

console.log(generate(3));
