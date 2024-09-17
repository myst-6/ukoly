#include <bits/stdc++.h>
#define int long long
using namespace std;

int solve(int a, int b) {
    if (a < b) swap(a, b);
    if (b == 0) return a;
    if (a % 4 == 2 and b % 4 == 2) return INT_MAX;
    if (a % 2 == 0 and b % 2 == 0) return 2 * solve(a/2, b/2);
    if (b % 2 == 0) swap(a, b);
    if (a % 2 == 0) return 1+min(solve(a, b+1), solve(a, b-1));
    return INT_MAX;
}

int32_t main()
{
    int a, b;
    cin >> a >> b;
    cout << solve(abs(a), abs(b))+1 << endl;
    return 0;
}