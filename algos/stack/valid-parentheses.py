'''
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
'''


def isValid(s: str) -> bool:
  Map = { ")" : "(", "]" : "[", "}" : "{"}
  stack = []

  for c in s:
      if c in Map:
          if stack and stack[-1] is Map[c]:
              stack.pop()
          else:
              return False
      else:
          stack.append(c)

  return not stack
  
print(isValid(s="()"))