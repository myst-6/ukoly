#include <bits/stdc++.h>
using namespace std;

map<tuple<int, int, int, int>, long long> memo;

long long waysWithLength(int a, int b, int c, int d) {
    if (a < 0 || b < 0 || c < 0 || d < 0) return 0;
    if (a + b + c + d == 1) return (a > 0) + (b > 0) + (c > 0) + (d > 0);

    tuple<int, int, int, int> key = make_tuple(a, b, c, d);
    if (memo.find(key) != memo.end()) return memo[key];
    
    return memo[key] = waysWithLength(a - 1, b, c, d) +
                       waysWithLength(a, b - 1, c, d) +
                       waysWithLength(a, b, c - 1, d) +
                       waysWithLength(a, b, c, d - 1);
}

string find(vector<int>& cnts, long long& ways, long long n) {
    if (cnts[0] + cnts[1] + cnts[2] + cnts[3] == 1)
        return string(1, "ABCD"[find(cnts.begin(), cnts.end(), 1) - cnts.begin()]);

    for (int i = 0; i < 4; i++) {
        cnts[i]--;
        if (ways + waysWithLength(cnts[0], cnts[1], cnts[2], cnts[3]) >= n) 
            return string(1, "ABCD"[i]) + find(cnts, ways, n);
        ways += waysWithLength(cnts[0], cnts[1], cnts[2], cnts[3]);
        cnts[i]++;
    }
}

int main() {
    vector<int> cnts(4);
    long long n;
    cin >> cnts[0] >> cnts[1] >> cnts[2] >> cnts[3] >> n;

    long long ways = 0;
    cout << find(cnts, ways, n) << endl;

    return 0;
}
