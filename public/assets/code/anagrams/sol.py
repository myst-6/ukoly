if __name__ == "__main__":
    word1 = input("Enter a word: ")
    word2 = input("Enter another word: ")
    print("Anagrams" if sorted(word1) == sorted(word2) else "Not anagrams")