def solve():
    s = input() 
    steps, pos = map(int, input().split()) 

    pow2 = [1] * 32
    for i in range(1, 32):
        pow2[i] = 2 * pow2[i - 1]

    fib = [1, 1]
    while fib[-1] < pow2[31]:
        fib.append(fib[-1] + fib[-2])

    dp = {}

    def countChars(c, steps, pos):
        if (c, steps, pos) in dp:
            return dp[(c, steps, pos)]
        if pos <= 0:
            return [0, 0, 0, 0, 0]

        if c == 'A':
            if steps == 0:
                return [1, 0, 0, 0, 0]
            if steps == 1:
                return [0, 1, 0, 0, 0]
            if pos >= fib[steps - 2]:
                a = countChars('A', steps - 2, fib[steps - 2])
                b = countChars('A', steps - 1, pos - fib[steps - 2])
                result = [a[i] + b[i] for i in range(5)]
                dp[(c, steps, pos)] = result
                return result
            else:
                return countChars('A', steps - 2, pos)

        if c == 'B':
            return countChars('A', steps + 1, pos)

        if c == 'C':
            if steps == 0:
                return [0, 0, 1, 0, 0]
            length = pow2[steps]
            if pos >= length // 2:
                a = countChars('C', steps - 1, length // 2)
                b = countChars('D', steps - 1, pos - length // 2)
                result = [a[i] + b[i] for i in range(5)]
                dp[(c, steps, pos)] = result
                return result
            else:
                return countChars('C', steps - 1, pos)

        if c == 'D':
            if steps == 0:
                return [0, 0, 0, 1, 0]
            length = pow2[steps]
            if pos >= length // 2:
                a = countChars('D', steps - 1, length // 2)
                b = countChars('C', steps - 1, pos - length // 2)
                result = [a[i] + b[i] for i in range(5)]
                dp[(c, steps, pos)] = result
                return result
            else:
                return countChars('D', steps - 1, pos)

        if c == 'E':
            return [0, 0, 0, 0, min(pos, pow2[steps])]

    length = 0
    ans = [0] * 5
    for c in s:
        add = countChars(c, steps, pos - length)
        ans = [ans[i] + add[i] for i in range(5)]

        if c == 'A':
            length += fib[steps]
        elif c == 'B':
            length += fib[steps + 1]
        elif c in 'CDE':
            length += pow2[steps]

    print(' '.join(map(str, ans)))

if __name__ == "__main__":
    solve()
