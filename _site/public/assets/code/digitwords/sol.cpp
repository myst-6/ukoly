// Solution author: Alex Pylypenko

#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<string> digits = {"@", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"};
    string word;
    cin >> word;

    for (int number = 0; number < digits.size(); ++number) {
        int digit_index = 0;
        int word_index = 0;

        while (true) {
            if (word_index < word.length() && digit_index < digits[number].length() && 
                word[word_index] == digits[number][digit_index]) {
                digit_index++;
            }
            word_index++;

            if (digit_index == digits[number].length()) {
                cout << number << endl;
                return 0;
            }
            if (word_index == word.length()) {
                break;
            }
        }
    }

    cout << "NO" << endl;
    return 0;
}