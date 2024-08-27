def is_pat(s):
    if len(s) == 1:
        return True
    for i in range(1, len(s)):
        left = s[:i]
        right = s[i:]
        if min(left) <= max(right):
            continue

        if is_pat(left[::-1]) and is_pat(right[::-1]):
            return True
    return False


if __name__ == "__main__":
    a, b = input("Please enter two strings: ").split()
    print("YES" if is_pat(a) else "NO")
    print("YES" if is_pat(b) else "NO")
    print("YES" if is_pat(a+b) else "NO")