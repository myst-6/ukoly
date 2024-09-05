#include <bits/stdc++.h>
using namespace std;
#define int long long
int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int s, d;
    cin >> s >> d;
    int dp[s+1][d+1] = { 0 };
    for (int i=1; i<21; i++) {
        if (2 * i > s) break;
        dp[2 * i][1] = 1;
    }
    for (int i=2; i<= d; i++) {
        for (int score=0; score<=s; score++) {
            for (int last_throw = 1; last_throw <= 20; last_throw++) {
                if ((score - last_throw) <= 0) break;
                dp[score][i] += dp[score - last_throw][i-1];
            }
        }
    }

    cout << dp[s][d] << endl;

    return 0;
}