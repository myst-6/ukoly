// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string choices; cin >> choices;
    pair<int, int> promenade = {1, 1},
                   left      = {1, 0},
                   right     = {0, 1};

    for (char c : choices) {
        if (c == 'L') {
            left = promenade;
        } else {
            right = promenade;
        }
        promenade = {left.first + right.first, left.second + right.second};
    }
    cout << promenade.first << " / " << promenade.second << endl;

    return 0;
}
