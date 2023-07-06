'''
Evaluate the expression. Return an integer that represents the value of the expression.

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
'''


def evalRPN(tokens):
    stack = []

    for token in tokens:
        print(stack)
        if token == "+":
            stack.append(stack.pop() + stack.pop())
        elif token == "-":
            a, b = stack.pop(), stack.pop()
            stack.append(b - a)
        elif token == "*":
            stack.append(stack.pop() * stack.pop())
        elif token == "/":
            a, b = stack.pop(), stack.pop()
            stack.append(int(b / a))
        else:
            stack.append(int(token))

    return stack[0]


# print(int(6 / -132))
print(evalRPN(["10", "6", "9", "3", "+", "-11",
      "*", "/", "*", "17", "+", "5", "+"]))
