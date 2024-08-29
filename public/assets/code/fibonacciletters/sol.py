# Solution author: Alex Pylypenko
if __name__ == "__main__":
    a, b, n = input("Please enter two capital letters and a positive integer: ").split()
    n = int(n)
    a = ord(a) - 64
    b = ord(b) - 64  # Convert to 1-based index
    if n == 1:
        print(chr(a+64))
    else:
        for i in range(n-2):
            a, b = b, ((a+b-1) % 26) + 1

        print(chr(b+64))  # Convert back to ASCII