// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

vector<string> morse = {".-", "-...", "-.-.", "-..", ".", 
                        "..-.", "--.", "....", "..", ".---", 
                        "-.-", ".-..", "--", "-.", "---", 
                        ".--.", "--.-", ".-.", "...", "-", 
                        "..-", "...-", ".--", "-..-", "-.--", 
                        "--.."};

string toMorse(char c) {
    return morse[c - 'a'];
}

int solve(const string &s, int i, int depth, int maxDepth, unordered_map<string, int> &memo) {
    if (depth > maxDepth) return 0;
    if (s.length() - i < 0) return 0;
    if (s.length() - i == 0) return depth == maxDepth;

    string key = to_string(i) + "," + to_string(depth);
    if (memo.find(key) != memo.end()) return memo[key];

    int ans = 0;
    for (int j = 1; j <= min(4, (int)s.length() - i); ++j) {
        string sub = s.substr(i, j);
        if (find(morse.begin(), morse.end(), sub) != morse.end()) {
            ans += solve(s, i + j, depth + 1, maxDepth, memo);
        }
    }
    memo[key] = ans;
    return ans;
}

int main() {
    string word;
    cin >> word;

    string encrypt = "";
    for (char c : word) {
        encrypt += toMorse(c);
    }

    unordered_map<string, int> memo;
    cout << solve(encrypt, 0, 0, word.length(), memo) << endl;

    return 0;
}
