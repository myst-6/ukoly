#include <bits/stdc++.h>

using namespace std;

// Function to add a new character to the string
string add(const string &s) {
    return s + static_cast<char>('A' + s.length());
}

// Function to swap the first two characters of the string
string swap(const string &s) {
    if (s.length() < 2) return s;
    return s[1] + s.substr(0, 1) + s.substr(2);
}

// Function to rotate the string by moving the first character to the end
string rotate(const string &s) {
    if (s.empty()) return s;
    return s.substr(1) + s[0];
}

// Function to solve the problem
int solve(const string &target) {
    queue<pair<string, int>> bfs;
    set<string> visited;
    bfs.push({"", 0});
    visited.insert("");

    while (!bfs.empty()) {
        string current = bfs.front().first;
        int steps = bfs.front().second;
        bfs.pop();

        if (current == target) {
            return steps;
        }

        if (current.length() < target.length()) {
            string new_string = add(current);
            if (visited.find(new_string) == visited.end()) {
                visited.insert(new_string);
                bfs.push({new_string, steps + 1});
            }
        }

        if (current.length() > 1) {
            string new_string_swap = swap(current);
            if (visited.find(new_string_swap) == visited.end()) {
                visited.insert(new_string_swap);
                bfs.push({new_string_swap, steps + 1});
            }

            string new_string_rotate = rotate(current);
            if (visited.find(new_string_rotate) == visited.end()) {
                visited.insert(new_string_rotate);
                bfs.push({new_string_rotate, steps + 1});
            }
        }
    }
    return -1; // Should not reach here if input is valid
}

int main() {
    string s;
    cin >> s;
    cout << solve(s) << endl;
    return 0;
}
