# Solution author: Alex Pylypenko
if __name__ == "__main__":
    n = int(input())
    answer = 1
    for i in range(2, n+1):
        if n % i == 0:
            answer *= i
            while n % i == 0:
                n //= i

    print(answer)
