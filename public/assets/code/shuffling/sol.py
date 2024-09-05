def break_shuffle(x):
    return x[1:] + [x[0]]


def out_riffle(x):
    left_half = x[:len(x)//2]
    right_half = x[len(x)//2:]
    output = []

    for (i, j) in zip(left_half, right_half):
        output.append(i)
        output.append(j)
    if len(x) % 2:
        output.append(left_half[-1])
    return output


def in_riffle(x):
    left_half = x[:len(x) // 2]
    right_half = x[len(x) // 2:]
    output = []

    for (i, j) in zip(left_half, right_half):
        output.append(j)
        output.append(i)
    if len(x) % 2:
        output.append(right_half[-1])
    return output


def parse(instructions, current_cards, start, end):
    i = start
    while i in range(start, end+1):
        if instructions[i] == "b":
            current_cards = break_shuffle(current_cards)
        elif instructions[i] == "i":
            current_cards = in_riffle(current_cards)
        elif instructions[i] == "o":
            current_cards = out_riffle(current_cards)
        elif instructions[i] in "0123456789":
            if instructions[i+1] == "(":
                new_start = i+2
                stack = 1
                for j in range(i+2, end+1):
                    if instructions[j] == "(":
                        stack += 1
                    elif instructions[j] == ")":
                        stack -= 1
                    if stack == 0:
                        new_end = j
                        break
                for _ in range(int(instructions[i])):
                    current_cards = parse(instructions, current_cards, new_start, new_end-1)

                i += (new_end - new_start) + 1
            else:
                for j in range(int(instructions[i])):
                    if instructions[i+1] == "b":
                        current_cards = break_shuffle(current_cards)
                    elif instructions[i+1] == "i":
                        current_cards = in_riffle(current_cards)
                    elif instructions[i+1] == "o":
                        current_cards = out_riffle(current_cards)

                i += 1
        i += 1
    return current_cards


if __name__ == "__main__":
    instructions = input("Please enter some instructions: ")
    c = parse(instructions, [1, 2, 3, 4, 5, 6, 7, 8], 0, len(instructions) - 1)
    print(c)