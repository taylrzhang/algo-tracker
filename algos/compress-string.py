# def compress(chars):
#     # modify the input array with numbers of occers of each char
#     if len(chars) == 1:
#         return 1

#     start = 0
#     write = 0

#     i = 0
#     while i < len(chars):
#         count = 0
#         while i < len(chars) and chars[i] == chars[start]:
#             count += 1
#             i += 1
#         chars[write] = chars[start]
#         write += 1
#         if count > 1:
#             for l in str(count):
#                 chars[write] = l
#                 write += 1
#         start = i
#     return write

def compress(chars):
    # modify the input array with numbers of occers of each char
    chars.append("")

    start = 0
    write = 0

    count = 0
    for i, char in enumerate(chars):
        if char != chars[start]:
            chars[write] = chars[start]
            write += 1
            count = i - start
            if count > 1:
                for l in str(count):
                    chars[write] = l
                    write += 1
            start = i
    return write


print(compress(["a", "a", "b", "b", "c", "c", "c"]))
print(compress(["a"]))
print(compress(["a", "b", "a", "b"]))
print(compress(["a", "b", "b", "b", "b", "b",
      "b", "b", "b", "b", "b", "b", "b"]))
