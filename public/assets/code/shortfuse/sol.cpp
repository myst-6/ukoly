// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

struct Fuse {
    int state; 
    double last; 
    double end; 
};

int n;
vector<int> fuseLengths;
set<double> times;

void dfs(double time, vector<Fuse> fuseState, double timingFrom) {
    if (timingFrom != -1)
        times.insert(time - timingFrom);

    // Burn more fuses at the current time
    for (int i = 0; i < n; i++) {
        if (fuseState[i].state == 0) {
            // Burn new fuse from 1 end
            auto curr = fuseState;
            curr[i] = {1, time, time + fuseLengths[i]};
            dfs(time, curr, timingFrom);

            // Burn new fuse from 2 ends
            curr = fuseState;
            curr[i] = {2, time, time + fuseLengths[i] / 2.};
            dfs(time, curr, timingFrom);
        } 
        else if (fuseState[i].state == 1 && fuseState[i].last != time) {
            // Burn already burning fuse from the other end
            auto curr = fuseState;
            curr[i] = {2, time, time + (fuseState[i].end - time) / 2.};
            dfs(time, curr, timingFrom);
        }
    }

    // Move to the next time
    auto curr = fuseState;
    double nxt = 1e9;
    for (auto &fuse : fuseState) 
        if (fuse.end < nxt)
            nxt = fuse.end;
    if (nxt == 1e9) return;

    for (int i = 0; i < n; i++) 
        if (curr[i].end == nxt) 
            curr[i] = {3, 1e9, 1e9};
    dfs(nxt, curr, timingFrom);
    if (timingFrom == -1) 
        dfs(nxt, curr, time);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n;
    fuseLengths.resize(n);
    for (int i = 0; i < n; ++i) 
        cin >> fuseLengths[i];

    vector<Fuse> fuseState(n, {0, 1e9, 1e9});
    dfs(0, fuseState, -1);
    cout << times.size() + 1 << endl; // Add 1 for time = 0
    
    return 0;
}
