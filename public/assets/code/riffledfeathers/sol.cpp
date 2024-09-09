#include <bits/stdc++.h>

#define int long long

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n, m, i;
    cin >> n >> m >> i;
    i--;
    vector<int> v(n);
    for (int j = 0; j < n; j++) {
        cin >> v[j];
        v[j]--;
    }
    /*
     * elemToIndex[i] = the index of element i in v
     */
    vector<int> elemToIndex(n);
    for (int j = 0; j < n; j++)
        elemToIndex[v[j]] = j;
    /*
     * Let dp[i][j] be the number of subsequences of length j starting from the element at index i
     */
    vector<vector<int>> dp(n, vector<int>(m + 1));
    for (int j = 0; j < n; j++)
        dp[j][1] = 1;
    for (int len = 2; len <= m; len++)
        for (int j = n - 1; j >= 0; j--)
            for (int k = j + 1; k < n; k++)
                dp[j][len] += dp[k][len - 1];
    /*
     * Let sortedRight[i] be the sorted set of integers to the right of index i
     */
    vector<set<int>> sortedRight(n);
    for (int j = n - 2; j >= 0; j--) {
        sortedRight[j] = sortedRight[j + 1];
        sortedRight[j].insert(v[j + 1]);
    }
    set<int> search = sortedRight[0];
    search.insert(v[0]);
    vector<int> res;
    for (int numLeft = m; numLeft > 0; numLeft--) {
        for (int e : search) {
            int numSubsequences = dp[elemToIndex[e]][numLeft];
            if (numSubsequences > i) {
                res.push_back(e);
                search = sortedRight[elemToIndex[e]];
                break;
            }
            i -= numSubsequences;
        }
    }
    for (int e: v)
        if (!count(res.begin(), res.end(), e))
            res.push_back(e);
    for (int j = 0; j < n; j++)
        cout << res[j] + 1 << " ";
    cout << endl;
    return 0;
}
