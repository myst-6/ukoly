// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

unordered_map<int, int> combs_memo;

int combs(int tot) {
    if (tot < 0) return 0;
    if (tot == 0) return 1;

    if (combs_memo.find(tot) != combs_memo.end()) return combs_memo[tot];

    int sum = 0;
    for (int i = 1; i <= 9; ++i) {
        sum += combs(tot - i);
    }
    combs_memo[tot] = sum;
    return sum;
}

string solve(int tot, int &ways, int n) {
    if (tot == 0) return "";

    int i = 1;
    while (ways < n && i <= max(9, tot)) {
        ways += combs(tot - i);
        i++;
    }
    i--;
    ways -= combs(tot - i);
    return to_string(i) + solve(tot - i, ways, n);
}

int main() {
    int s, n;
    cin >> s >> n;

    int ways = 0;
    string result = solve(s, ways, n);

    for (char c : result) {
        cout << c << " ";
    }
    cout << endl;

    return 0;
}
