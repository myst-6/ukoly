// solution author: Alex Pylypenko
#include <bits/stdc++.h>
#define int long long
#define all(x) x.begin(), x.end()
#define vi vector<int>
using namespace std;

int32_t main()
{
    ifstream cin("input.txt");
    ofstream cout("output.txt");
    
    int n, x;
    cin >> n >> x;
    vi a(n+1, 0);
    for (int i=1; i<=n; i++) cin >> a[i];
    for (int i=1; i<=n; i++) a[i] += a[i-1];

    sort(all(a));
    int ans = LLONG_MAX;
    int left = 0;
    int right = 1;
    while (right <= n) {
        int sum = a[right] - a[left];
        if (sum >= x) {
            ans = min(ans, sum);
            left++;
            if (left == right) right++;
        }
        else {
            right++;
        }
    }
    cout << ans << endl;
    return 0;
}