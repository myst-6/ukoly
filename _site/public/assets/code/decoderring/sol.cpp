#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n; cin >> n;
    string encrypted; cin >> encrypted;

    string alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    vector<char> dial2;
    int last = 0;
    while (!alpha.empty()) {
        last = (last + n - 1) % alpha.size();
        dial2.push_back(alpha[last]);
        alpha.erase(last, 1);
    }

    for (int i = 0; i < 6; i++) cout << dial2[i];
    cout << endl;

    string decrypt; 
    for (char c : encrypted) {
        decrypt += dial2[c - 'A'];
        dial2.push_back(dial2[0]);
        dial2.erase(dial2.begin());     
    }
    cout << decrypt;

    return 0;
}
