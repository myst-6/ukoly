#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string curr; cin >> curr;
    map<pair<char, char>, char> colours = {
        {{'B', 'R'}, 'G'},
        {{'B', 'G'}, 'R'},
        {{'G', 'R'}, 'B'}
    };

    while (curr.length() > 1) {
        string next; 
        for (int i = 0; i < curr.size() - 1; i++) {
            if (curr[i] == curr[i + 1])
                next += curr[i];
            else
                next += colours[{min(curr[i], curr[i+1]), max(curr[i], curr[i + 1])}];
        }
        curr = next;
    }
    cout << curr;

    return 0;
}
