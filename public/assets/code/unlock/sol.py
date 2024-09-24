from string import ascii_uppercase, ascii_lowercase


def press_button(grid, x, y):
    assert 0 <= x < 5 and 0 <= y < 5
    grid = [[i for i in j] for j in grid]
    grid[x][y] = (grid[x][y] + 1) % 3
    if x != 0:
        grid[x - 1][y] = (grid[x - 1][y] + 1) % 3
    if x != 4:
        grid[x + 1][y] = (grid[x + 1][y] + 1) % 3

    if y != 0:
        grid[x][y - 1] = (grid[x][y - 1] + 1) % 3
    if y != 4:
        grid[x][y + 1] = (grid[x][y + 1] + 1) % 3
    return [[i for i in j] for j in grid]


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
    c = input()
    for char in c:
        capitalisation = 2 if char in ascii_uppercase else 1
        char = char.lower()
        row = ascii_lowercase.index(char) // 5
        col = ascii_lowercase.index(char) % 5

        current_lighting[row][col] = capitalisation

    for top_row in combinations():
        answer = ""
        grid = [[i for i in j] for j in current_lighting]
        for i in range(5):
            for j in range(top_row[i]):
                grid = press_button(grid, 0, i)
            if top_row[i] == 2:
                answer += ascii_uppercase[i]
            elif top_row[i] == 1:
                answer += ascii_lowercase[i]

        for row in range(1, 5):
            for col in range(5):
                if grid[row - 1][col] == 0:
                    continue

                elif grid[row - 1][col] == 1:
                    grid = press_button(grid, row, col)
                    grid = press_button(grid, row, col)
                    answer += ascii_uppercase[5*row+col]
                else:
                    grid = press_button(grid, row, col)
                    answer += ascii_lowercase[5*row+col]

        for i in range(5):
            if grid[4][i] != 0:
                break
        else:
            print(answer)
            exit()

    print("Impossible")