# Solution author: Alex Pylypenko
if __name__ == "__main__":
    digits = ["@", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"]
    # The "@" is a placeholder to make the index of the digit match the digit itself
    word = input()
    for number, digit in enumerate(digits):
        digit_index = 0
        word_index = 0
        while True:
            if word[word_index] == digit[digit_index]:
                digit_index += 1
            word_index += 1

            if digit_index == len(digit):
                print(number)
                exit(-1)
            if word_index == len(word):
                break
    else:
        print("NO")
