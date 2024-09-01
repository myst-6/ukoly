#include <bits/stdc++.h>
using namespace std;

#define int long long
string alpha = "abcdefghijklmnopqrstuvwxyz";

signed main() {
    string parked;
    int n, k;
    cin >> parked >> k;
    n = parked.size();
    vector<int> possLeft(n + 1);
    vector<vector<int>> choices(n);
    possLeft[n] = 1;
    map<char, int> pos;
    for (int i = 0; i < n; i++)
        pos[parked[i]] = i;
    for (int i = n - 1; i >= 0; i--) {
        int j = pos[alpha[i]];
        while (j >= 0 && parked[j] != '.') {
            choices[i].push_back(toupper(alpha[j]));
            j -= 1;
        }
        reverse(choices[i].begin(), choices[i].end());
        parked[pos[alpha[i]]] = '.';
        possLeft[i] = possLeft[i + 1] * int64_t(choices[i].size());
    }
    int currK = 0;
    string ans = "";
    for (int i = 0; i < n; i++) {
        for (char a : choices[i]) {
            if (currK + possLeft[i + 1] >= k) {
                ans += a; break;
            } else currK += possLeft[i + 1];
        }
    }
    cout << ans << '\n';
 	return 0;
}