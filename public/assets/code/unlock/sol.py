# Solution author: Alex Pylypenko
from string import ascii_uppercase, ascii_lowercase


def press_button(grid, x, y):
    grid = grid[:]
    grid[x][y] = (grid[x][y] + 1) % 3
    if x != 0:
        grid[x - 1][y] = (grid[x - 1][y] + 1) % 3
    if x != 4:
        grid[x + 1][y] = (grid[x + 1][y] + 1) % 3

    if y != 0:
        grid[x][y - 1] = (grid[x][y - 1] + 1) % 3
    if y != 4:
        grid[x][y + 1] = (grid[x][y + 1] + 1) % 3
    return grid[:]


def combinations():
    output = []
    for i in range(3):
        for j in range(3):
            for k in range(3):
                for l in range(3):
                    for m in range(3):
                        output.append([i, j, k, l, m])
    return output


if __name__ == "__main__":
    current_lighting = [[0] * 5 for _ in range(5)]
    c = input("Please enter current lighting state: ")
    for i in c:
        if i == i.upper():
            letter_index = ascii_uppercase.index(i)
        else:
            letter_index = ascii_lowercase.index(i)

        current_lighting[letter_index // 5][letter_index % 5] = (2 if i == i.upper() else 1)
    original_lighting = current_lighting[:]
    for c in combinations():
        current_lighting = original_lighting[:]
        for col in range(5):
            for _ in range(c[col]):
                current_lighting = press_button(current_lighting, 0, col)
        solution = []

        for row in range(1, 5):
            for col in range(5):
                while current_lighting[row - 1][col] != 0:
                    current_lighting = press_button(current_lighting, row, col)
                    solution.append((row, col))

        if not any(current_lighting[-1]):
            s = ""
            for i in range(5):
                if c[i] == 1:
                    s += ascii_lowercase[i]
                elif c[i] == 2:
                    s += ascii_uppercase[i]
            curr_pointer = 0
            for letter_index in range(25):
                if curr_pointer == len(solution):
                    break
                if curr_pointer != len(solution) - 1:
                    if solution[curr_pointer] == solution[curr_pointer + 1]:
                        s += ascii_uppercase[5 * solution[curr_pointer][0] + solution[curr_pointer][1]]
                        curr_pointer += 2
                    else:
                        s += ascii_lowercase[5 * solution[curr_pointer][0] + solution[curr_pointer][1]]
                        curr_pointer += 1
                else:
                    s += ascii_lowercase[5 * solution[curr_pointer][0] + solution[curr_pointer][1]]
                    curr_pointer += 1
            print(s)
            exit()

    print("Impossible")
