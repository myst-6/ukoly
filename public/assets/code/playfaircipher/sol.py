# Solution author: Alex Pylypenko
from string import ascii_uppercase


def find(grid, letter):
    for i in range(5):
        for j in range(5):
            if grid[i][j] == letter:
                return i, j

    return 100, 100


def reshape(grid):
    output = [[0] * 5 for _ in range(5)]
    for i in range(5):
        for j in range(5):
            output[i][j] = grid[5*i+j]
    return output


def output_grids(*grids):
    for i, j in zip(*grids):
        print("".join(i) + "          " + "".join(j))


if __name__ == "__main__":
    alphabet = list(ascii_uppercase)
    alphabet.remove("Q")
    word1 = input()
    grid1 = alphabet[:]

    for i in word1[::-1]:
        grid1.remove(i)
        grid1.insert(0, i)

    grid1 = reshape(grid1)
    word2 = input()

    grid2 = alphabet[:]

    for i in word2[::-1]:
        grid2.remove(i)
        grid2.insert(0, i)

    grid2 = reshape(grid2[::-1])
    output_grids(grid1, grid2)
    print()
    while True:
        command = input()

        match command:
            case "Q":
                break
            case "E":
                word_to_encode = input()
                if len(word_to_encode) % 2 == 1:
                    word_to_encode += "X"
                output = ""
                for letter1, letter2 in zip(word_to_encode[::2], word_to_encode[1::2]):
                    row1, col1 = find(grid1, letter1)
                    row2, col2 = find(grid2, letter2)

                    if row1 == row2:
                        output += grid1[row1][(col1+1) % 5]
                        output += grid2[row2][(col2+1) % 5]

                    else:
                        output += grid1[row2][col1]
                        output += grid2[row1][col2]

                print(output + "\n")

            case "D":
                word_to_decode = input()
                output = ""
                for letter1, letter2 in zip(word_to_decode[::2], word_to_decode[1::2]):
                    row1, col1 = find(grid1, letter1)
                    row2, col2 = find(grid2, letter2)

                    if row1 == row2:
                        output += grid1[row1][(col1-1) % 5]
                        output += grid2[row2][(col2-1) % 5]

                    else:
                        output += grid1[row2][col1]
                        output += grid2[row1][col2]

                if output[-1] == "X":
                    output = output[:-1]
                print(output + "\n")
