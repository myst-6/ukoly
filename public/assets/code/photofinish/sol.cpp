#include <bits/stdc++.h>

#define int long long

using namespace std;

map<int, bool> cache;

int getIndexOfMax(int n, vector<int> v) {
    for (int i = 0; i < n; i++)
        if (v[i] == n)
            return i;
}

bool isPermIndexEven(int n, vector<int> v) {
    /*
     * Returns true if the vector v containing a permutation of integers 
     * from 1 to n would have an even index in the sequence of permutations 
     * generated according to the procedure in the problem statement
     */
    if (n == 1)
        return true;
    if (cache.count(n))
        return cache[n];
    int maxPos = getIndexOfMax(n, v);
    bool evenFromEnd = (n - 1 - maxPos) % 2 == 0;
    v.erase(v.begin() + maxPos);
    bool res = !(evenFromEnd ^ isPermIndexEven(n - 1, v));
    cache[n] = res;
    return res;
}

void solve(int n, vector<int>& v) {
    if (n == 2) {
        swap(v[0], v[1]);
        return;
    }
    int maxPos = getIndexOfMax(n, v);
    v.erase(v.begin() + maxPos);
    int destPos;
    int restEven = isPermIndexEven(n - 1, v);
    if (restEven)
        destPos = 0;
    else
        destPos = n - 1;
    if (maxPos != destPos) {
        if (destPos > maxPos)
            maxPos++;
        else
            maxPos--;
    } else
        solve(n - 1, v);
    v.insert(v.begin() + maxPos, n);
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    solve(n, v);
    for (int i = 0; i < n - 1; i++) cout << v[i] << " ";
    cout << v[n - 1] << endl;
    return 0;
}