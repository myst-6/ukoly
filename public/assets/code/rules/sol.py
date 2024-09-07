# Solution author: Alex Pylypenko
# (although I was probably inebriated when I wrote this...)

def tokenize(pattern):
    tokens = []  # (string, lower_bound, upper_bound)
    i = 0
    while i < len(pattern):
        if pattern[i] == '(':
            j = i + 1
            while pattern[j] != ')':
                j += 1
            j += 1
            if pattern[j] == '*':
                tokens.append((pattern[i + 1:j - 1], 0, 12))
                j += 1
            elif pattern[j] == '?':
                tokens.append((pattern[i + 1:j - 1], 0, 1))
                j += 1
            else:
                tokens.append((pattern[i + 1:j - 1], 1, 1))
            i = j
        else:
            next_char = pattern[i + 1] if i + 1 < len(pattern) else None
            if not next_char:
                tokens.append((pattern[i], 1, 1))
            elif next_char == '*':
                tokens.append((pattern[i], 0, 12))
                i += 1
            elif next_char == '?':
                tokens.append((pattern[i], 0, 1))
                i += 1
            else:
                tokens.append((pattern[i], 1, 1))

            i += 1

    return tokens


def generate_patterns(pattern):
    tokens = tokenize(pattern)
    patterns = [""]
    for token in tokens:
        new_patterns = []
        for i in range(token[1], token[2] + 1):
            for p in patterns:
                ns = p + token[0] * i
                if len(ns) <= 12:
                    new_patterns.append(ns)
        patterns = new_patterns

    return patterns


def match(pattern, string):
    patterns = generate_patterns(pattern)
    for p in patterns:
        if len(p) != len(string):
            continue
        flag = True
        for i in range(1, len(p)):
            if p[i] == "x":
                continue
            if string[i] >= string[i - 1] and p[i] == 'd':
                flag = False
                break
            if string[i] <= string[i - 1] and p[i] == 'u':
                flag = False
                break
        if flag:
            return True


if __name__ == '__main__':
    pattern = input("Please enter the pattern: ")
    s1 = input("Please enter the first string: ")
    s2 = input("Please enter the second string: ")
    print("Yes" if match(pattern, s1) else "No")
    print("Yes" if match(pattern, s2) else "No")
