#include <bits/stdc++.h>
using namespace std;

unordered_map<int, long long> combs_cache;

long long combs(int length) {
    if (length <= 1) return 1;
    if (combs_cache.find(length) != combs_cache.end()) return combs_cache[length];
    combs_cache[length] = 9 * combs(length - 2);
    return combs_cache[length];
}

string solve(int length, long long &ways, long long n) {
    if (length == 0) return "";
    if (length == 1) return "5";

    for (int i = 1; i < 10; ++i) {
        if (ways + combs(length - 2) >= n) {
            return to_string(i) + solve(length - 2, ways, n) + to_string(10 - i);
        }
        ways += combs(length - 2);
    }
    return "";
}

int main() {
    long long n;
    cin >> n;

    long long ways = 0;
    int l = 0;
    while (ways < n) {
        l += 1;
        ways += combs(l);
    }
    ways -= combs(l);

    cout << solve(l, ways, n) << endl;

    return 0;
}
