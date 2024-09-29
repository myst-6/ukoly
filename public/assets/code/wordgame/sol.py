from functools import lru_cache  
# cache is Python 3.9+ only, so it's risky unless 
# you know the version of Python your teacher is using
from collections import deque, defaultdict
from math import comb as choose
from string import ascii_uppercase


def letter_to_number(x):
    return ascii_uppercase.find(x) + 1


def number_to_letter(x):
    return ascii_uppercase[x - 1]


@lru_cache(maxsize=None)
def num_answers_with_sum_x_beginning_with_y(x, y):
    # print(x, number_to_letter(y))
    if x == y:
        return 1
    if x < y:
        return 0
    if y < 1:
        return 0
    if x == 0:
        return 0
    total = 0

    for next_letter in range(1, 27):
        if next_letter == y:
            continue
        if next_letter > x - y:
            break
        total += num_answers_with_sum_x_beginning_with_y(x - y, next_letter)

    return total


def solve(word):
    score = 0
    for i in word:
        score += letter_to_number(i)

    total = 0

    for i in range(len(word)):
        for letter in range(1, letter_to_number(word[i])):
            if i > 0:
                if number_to_letter(letter) == word[i - 1]:
                    continue
            total += num_answers_with_sum_x_beginning_with_y(score, letter)

        score -= letter_to_number(word[i])

    return total + 1


if __name__ == "__main__":
    word = input().upper().strip()
    print(solve(word))

"""
num answers with sum x that begin with the number y
= number of answers with sum x-y that *don't* begin with the number y


5 A
4 B 4 C 4 D 4 E 4 
 
"""
