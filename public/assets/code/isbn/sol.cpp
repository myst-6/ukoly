#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    int idx = s.find('?');
    int multiplier = 10 - idx;
    int total = 0;

    for (int i = 0; i < s.size(); ++i) {
        if (s[i] != '?') {
            int val;
            if (s[i] == 'X') {
                val = 10;
            } else {
                val = s[i] - '0';  // convert character to integer
            }
            total += (10 - i) * val;
        }
    }

    for (int i = 0; i <= 10 + (idx == 9); ++i) {
        if ((total + i * multiplier) % 11 == 0) {
            if (i == 10) {
                cout << 'X' << endl;
            } else {
                cout << i << endl;
            }
            break;
        }
    }

    return 0;
}
