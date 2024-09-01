def is_prime(x):
    if x == 1:
        return False
    for i in range(2, int(x**0.5)+1):
        if x % i == 0:
            return False


    return True


if __name__ == "__main__":
    a = int(input("Please enter a number: "))
    ways = 0
    for num1 in range((a//2) + 1):
        num2 = a - num1
        if is_prime(num1) and is_prime(num2):
            ways += 1

    print(ways)