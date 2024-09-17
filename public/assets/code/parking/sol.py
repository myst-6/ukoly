from string import ascii_uppercase, ascii_lowercase
from collections import defaultdict
from functools import reduce
from operator import mul


def product(x):
    try:
        return reduce(mul, x)
    except TypeError:
        return 1

if __name__ == "__main__":
    letters = input().strip().split()
    letters, n = letters[0], int(letters[1])
    num_cars = len(letters)
    preference_lists = []

    currently_parked = [False] * num_cars
    for current_car in range(num_cars):
        car_symbol = ascii_lowercase[current_car]

        if not any(currently_parked):
            preference_lists.append([ascii_uppercase[letters.index(car_symbol)]])
        else:
            preference_lists.append([])
            for i in range(letters.index(car_symbol), -1, -1):
                if not currently_parked[i] and i != letters.index(car_symbol):
                    break
                preference_lists[-1].append(ascii_uppercase[i])
            preference_lists[-1].reverse()
        currently_parked[letters.index(car_symbol)] = True

    solution = ""
    x = 0
    for i in range(num_cars):
        current_index = -1
        while n > 0:
            x = product([len(i) for i in preference_lists[i + 1:]])
            n -= x
            current_index += 1
        n += x
        solution += preference_lists[i][current_index]

    print(solution)