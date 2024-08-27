#include <bits/stdc++.h>
using namespace std; 

int main() {
    ios_base::sync_with_stdio(false); 
    cin.tie(nullptr); 
    
    string s; 
    cin >> s; 
    int n = ssize(s); 

    int ans = 0; 
    for (int i=1; i<(1<<n); i++) {
        vector<int> pos={0}; 
        for (int j=0; j<n; j++) {
            if (i & (1<<j)) {
                pos.push_back(j+1); 
            }
        }
        pos.push_back(n); 
        vector<string> t; 
        for (int j=0; j+1<ssize(pos); j++) {
            t.push_back(s.substr(pos[j], pos[j+1]-pos[j])); 
        }
        int l = 0, r = ssize(t)-1; 
        bool ok = 1; 
        while (l <= r) {
            if (t[l] != t[r]) ok = 0; 
            ++l, --r; 
        }
        if (ok) {
            ++ans; 
        }
    }
    cout << ans << '\n'; 

    return 0; 
}