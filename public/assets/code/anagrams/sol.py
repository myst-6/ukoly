if __name__ == "__main__":
    word1 = input()
    word2 = input()
    print("Anagrams" if sorted(word1) == sorted(word2) else "Not anagrams")