from string import ascii_uppercase
from functools import cache


characters_allowed = ""


@cache
def solve(used, smallest_fail_char, smallest_char_in_string):
    if all(used):
        return 1
    used = list(used)
    total = 0
    for new_char_index in range(len(characters_allowed)):
        char = characters_allowed[new_char_index]
        if used[new_char_index]:
            continue
        if char > smallest_fail_char:
            break
        used[new_char_index] = True
        current_smallest_fail_char = smallest_fail_char
        current_smallest_char_in_string = smallest_char_in_string
        if char < smallest_char_in_string:
            current_smallest_char_in_string = char
        elif char < smallest_fail_char:
            current_smallest_fail_char = char
        total += solve(tuple(used), current_smallest_fail_char, current_smallest_char_in_string)
        used[new_char_index] = False
    return total


if __name__ == "__main__":
    length, chars = input().strip().split()
    length = int(length)
    smallest_fail_char = "Z"  # not failing
    smallest_char = "Z"
    used = [False] * length
    characters_allowed = ascii_uppercase[:length]
    for char in chars:
        if char < smallest_char:
            smallest_char = char
        elif char < smallest_fail_char:
            smallest_fail_char = char
        elif char > smallest_fail_char:
            print(0)
            exit()
        used[characters_allowed.index(char)] = True

    print(solve(tuple(used), smallest_fail_char, smallest_char))
