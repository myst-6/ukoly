#include <bits/stdc++.h>
using namespace std;

const string alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
unordered_map<char, int> alpha_map;
unordered_map<int, char> reverse_alpha_map;
map<pair<int, char>, int> combs_cache;

int toInd(char x) {
    return alpha_map[x];
}

char toChr(int x) {
    return reverse_alpha_map[x];
}

int combs(int l, char smallest = 'A') {
    if (combs_cache.count({l, smallest})) return combs_cache[{l, smallest}];
    if (l == 1) return 36 - toInd(smallest);

    int ans = 0;
    for (int i = toInd(smallest) + 1; i < 36; ++i)
        ans += combs(l - 1, toChr(i));
    return combs_cache[{l, smallest}] = ans;;
}

string solve(int length, int& ways, int n, char smallest = 'A') {
    if (length == 1)
        return string(1, alpha[toInd(smallest) + n - ways - 1]);

    for (int i = toInd(smallest); i < 36; ++i) {
        if (ways + combs(length, toChr(i)) - combs(length, toChr(i + 1)) >= n)
            return toChr(i) + solve(length - 1, ways, n, toChr(i + 1));
        ways += combs(length, toChr(i)) - combs(length, toChr(i + 1));
    }
    return "";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    for (int i = 0; i < alpha.size(); ++i) {
        alpha_map[alpha[i]] = i;
        reverse_alpha_map[i] = alpha[i];
    }

    int n;
    cin >> n;

    int length = 0;
    int ways = 0;

    while (ways < n) {
        length++;
        ways += combs(length);
    }
    ways -= combs(length);

    cout << solve(length, ways, n) << endl;

    return 0;
}
