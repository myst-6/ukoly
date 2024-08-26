// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

bool between(int a, int b, int c) {
    return min(a, b) < c && c < max(a, b);
}

vector<string> getNext(string s) {
    vector<string> ans;
    for (int i = 0; i < s.size() - 1; i++) {
        if (!(i > 0 && between(s[i], s[i+1], s[i-1]) || i < s.size() - 2 && between(s[i], s[i+1], s[i+2])))
            continue;
        
        swap(s[i], s[i+1]);
        ans.push_back(s);
        swap(s[i], s[i+1]);
    }
    return ans;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n; cin >> n;
    string s; cin >> s;

    int ans = 0;
    queue<pair<string, int>> q;
    unordered_set<string> seen;
    q.push({s, 0});
    while (!q.empty()) {
        auto [curr, d] = q.front(); q.pop();
        if (seen.count(curr)) continue;

        seen.insert(curr);
        ans = max(ans, d);

        for (string next : getNext(curr))
            if (!seen.count(next)) 
                q.push({next, d+1});
    }
    cout << ans;

    return 0;
}