def roman_numeral(x):
    ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    return hundreds[(x % 1000) // 100] + tens[(x % 100) // 10] + ones[x % 10]

s, n = input().split()
n = int(n)

for _ in range(n):
    s += '.'
    t = ""
    last = ' '
    sz = 0
    
    for i in range(len(s)):
        if last != s[i]:
            if last != ' ':
                t += roman_numeral(sz) + last
            last = s[i]
            sz = 1
        else:
            sz += 1
    
    s = t

print(s.count('I'), s.count('V'))
