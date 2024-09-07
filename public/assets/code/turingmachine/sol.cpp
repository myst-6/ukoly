// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    unordered_map<int, bool> tape;
    int pos = 0, currstate = 1;

    int states; cin >> states;
    vector<array<tuple<int, char, int>, 2>> instructions(states + 1);
    for (int i = 1; i <= states; i++) {
        for (int j = 0; j < 2; j++) {
            bool x; char y; int z;
            cin >> x >> y >> z;
            instructions[i][j] = {x, y, z};
        }
    }
    int m; cin >> m;

    for (int i = 0; i < m; i++) {
        if (currstate == 0) {
            for (int j = pos - 3; j <= pos + 3; j++)
                cout << tape[j];
            cout << endl << i; 
            return 0;
        }

        auto [w, d, t] = instructions[currstate][tape[pos]];
        tape[pos] = w;
        if (d == 'R') pos++;
        else pos--;
        currstate = t;
    }
        
    for (int j = pos - 3; j <= pos + 3; j++)
        cout << tape[j];
    cout << endl << m; 

    return 0;
}
