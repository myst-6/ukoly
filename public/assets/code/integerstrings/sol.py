from math import floor, log10


def number_of_digits_before_number(n):
    num_digits = floor(log10(n) + 1)
    to_decrease = (pow(10, num_digits) - 1) // 9

    return (n + 1) * num_digits - to_decrease - len(str(n))


def solve(x):
    for num_digits_in_answer in range(100):
        new_x = number_of_digits_before_number(10 ** num_digits_in_answer)
        if x < new_x:
            break

    x -= number_of_digits_before_number(10 ** (num_digits_in_answer - 1))
    number_position, digit = divmod(x, num_digits_in_answer)

    return str(number_position + 10 ** (num_digits_in_answer-1))[digit]


if __name__ == "__main__":
    n, i = [int(i) for i in input().strip().split()]
    print(solve(i + number_of_digits_before_number(n) - 1))
