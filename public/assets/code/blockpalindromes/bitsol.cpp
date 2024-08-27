#include <bits/stdc++.h>

using namespace std;

// Function to check if a vector of strings is palindromic
bool is_palindromic(const vector<string>& subsets) {
    return subsets == vector<string>(subsets.rbegin(), subsets.rend());
}

int main() {
    string s;
    cout << "Please enter a word: ";
    cin >> s;

    int n = s.length() - 1;
    int answer = 0;

    // Iterate through all possible subsets of the string
    for (int i = 1; i < (1 << n); i++) {
        vector<int> bits;

        // Find which bits are set in the current subset
        for (int j = 0; j < n; j++) {
            if ((i >> j) & 1) {
                bits.push_back(j + 1);
            }
        }

        bits.insert(bits.begin(), 0);
        bits.push_back(n + 1);

        vector<string> intervals;

        // Split the string into intervals based on the set bits
        for (int i = 1; i < bits.size(); i++) {
            intervals.push_back(s.substr(bits[i-1], bits[i] - bits[i-1]));
        }

        // Check if the intervals form a palindromic sequence
        if (is_palindromic(intervals)) {
            answer++;
        }
    }

    // Output the result
    cout << answer << endl;

    return 0;
}
