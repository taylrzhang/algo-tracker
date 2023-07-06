/**
 * Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
 */

function evalRPN(tokens) {
  //push numbers in a stack, if meet operators, pop numbers to calc and push result back to the stack
  let stack = [];
  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "-") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(b - a);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "/") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(b / a >= 0 ? Math.floor(b / a) : Math.ceil(b / a));
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
}

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); //-> 22
console.log(evalRPN(["2", "1", "+", "3", "*"])); //-> 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); //-> 6
