#include <bits/stdc++.h>
using namespace std;

int main() {
    string word1, word2;
    
    // Get user input
    cout << "Enter a word: ";
    cin >> word1;
    
    cout << "Enter another word: ";
    cin >> word2;
    
    // Sort the strings
    sort(word1.begin(), word1.end());
    sort(word2.begin(), word2.end());
    
    // Check if sorted strings are equal
    if (word1 == word2) {
        cout << "Anagrams" << endl;
    } else {
        cout << "Not anagrams" << endl;
    }
    
    return 0;
}
