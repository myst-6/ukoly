// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int ans = 0;
    int n, words;
    cin >> n >> words;

    for (int i = 1; i <= n; ++i) {
        ans = (ans + words) % i;
    }

    cout << ans + 1 << endl;
    return 0;
}
