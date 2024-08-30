// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int solve(int n, int words) {
    if (n == 1) return 0;
    return (solve(n - 1, words) + words) % n;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, words;
    cin >> n >> words;
    cout << solve(n, words) + 1 << endl;
    return 0;
}
