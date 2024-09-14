#include <bits/stdc++.h>

using namespace std;

bool is_pat(const string& s) {
    if (s.length() == 1) {
        return true;
    }

    for (size_t i = 1; i < s.length(); ++i) {
        string left = s.substr(0, i);
        string right = s.substr(i);

        if (*min_element(left.begin(), left.end()) <= *max_element(right.begin(), right.end())) {
            continue;
        }

        reverse(left.begin(), left.end());
        reverse(right.begin(), right.end());

        if (is_pat(left) && is_pat(right)) {
            return true;
        }
    }

    return false;
}

int main() {
    string a, b;
    cin >> a >> b;

    cout << (is_pat(a) ? "YES" : "NO") << endl;
    cout << (is_pat(b) ? "YES" : "NO") << endl;
    cout << (is_pat(a + b) ? "YES" : "NO") << endl;

    return 0;
}
