def e(i):
    return 2 * i


def o(i):
    return 2 * i - 1


def last_position_of_element_in_t(x):
    return (x * (x + 1)) // 2


def t(i):
    # kind of binary search

    left = 0
    right = 2 ** 61

    while left <= right:
        mid = left + (right-left)//2
        if last_position_of_element_in_t(mid) >= i > last_position_of_element_in_t(mid-1):
            break
        elif last_position_of_element_in_t(mid) < i:
            left = mid + 1
        else:
            right = mid - 1

    return mid


def parse(d):
    x = 0
    answer = []
    while x < len(d):
        if d[x] in "EOT":
            if not answer:
                answer = [d[x]]
            else:
                answer = [d[x]] + answer + [d[x]]
            x += 1

        else:
            stack = 0
            for i in range(x, len(d)):
                if d[i] == "(":
                    stack += 1
                elif d[i] == ")":
                    stack -= 1

                if stack == 0:
                    break

            sol_inside_brackets = parse(d[x+1:i])

            if not answer:
                answer = sol_inside_brackets
            else:
                answer = sol_inside_brackets + answer + sol_inside_brackets

            x = i+1

    return answer


def solve(tokens, i):
    answer = i
    for token in tokens[::-1]:
        if token == "E":
            answer = e(answer)
        elif token == "O":
            answer = o(answer)
        elif token == "T":
            answer = t(answer)

    return answer


if __name__ == "__main__":
    d, i = input().strip().split()
    i = int(i)
    print(solve(parse(d), i))
