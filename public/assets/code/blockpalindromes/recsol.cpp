#include <iostream>
#include <string>

using namespace std;

int solve(const string& s) {
    int answer = 1;
    if (s.size()<2) return 1;
    // Iterate through the string up to its midpoint
    for (int i = 1; i <= s.length() / 2; i++) {
        // Check if the first 'i' characters are equal to the last 'i' characters
        if (s.substr(0, i) != s.substr(s.length() - i, i)) {
            continue;
        }
        // Recursively call 'solve' on the substring excluding the matched part
        answer += solve(s.substr(i, s.length() - 2 * i));
    }

    return answer;
}

int main() {
    string s;
    cin >> s;

    // Output the result after subtracting 1 (to match the original Python behavior)
    cout << solve(s) - 1 << endl;

    return 0;
}
