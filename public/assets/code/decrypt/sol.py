#Solution Author: yuvan raja
def toNum(ch):
    return ((ord(ch) - ord('A') + 1)%26)
def toChar(num):
    if num == 0:
        return 'Z'
    return chr(ord('A') - 1 + num)
s = input()
prev = -1
out = ""
for char in s:
    if prev == -1:
        out += char
    else:
        out+= toChar((toNum(char) - toNum(prev))%26)
    prev = char
print(out)
