#include <bits/stdc++.h>

using namespace std;

string stringify(vector<int> x) {
    string output = "[";
    for (int i=0; i<x.size()-1; i++) {
        output += to_string(x[i]) + ", ";
    }
    return output + to_string(x[x.size()-1]) + "]";
}

int32_t main()
{
    int j, n;
    cin >> j >> n;

    vector<int> capacities(j);
    for (int i=0; i<j; i++) cin >> capacities[i];

    set<vector<int>> seen;
    queue<pair<int, vector<int>>> q;
    q.push(make_pair(0, vector<int>(j, 0)));
    vector<int> new_state;
    while (not q.empty()) {
        auto [distance, state] = q.front();

        q.pop();

        if (find(state.begin(), state.end(), n) != state.end()) { cout << distance << endl; break; }
        if (seen.find(state) != seen.end()) continue;

        seen.insert(state);
        for (int i=0; i<j; i++) {
            new_state = state;
            new_state[i] = 0;
            q.push(make_pair(distance + 1, new_state));
            new_state[i] = capacities[i];
            q.push(make_pair(distance + 1, new_state));
        }

        for (int i=0; i<j; i++) {
            if (state[i] == 0) continue;
            for (int k=0; k<j; k++) {
                if (i==k) continue;
                if (state[k] == capacities[k]) continue;
                if (state[i] >= capacities[k] - state[k]) {
                    new_state = state;
                    new_state[i] -= capacities[k] - new_state[k];
                    new_state[k] = capacities[k];
                    q.push(make_pair(distance + 1, new_state));
                }
                else {
                    new_state = state;
                    new_state[k] += state[i];
                    new_state[i] = 0;
                    q.push(make_pair(distance + 1, new_state));
                }
            }
        }
    }

    return 0;
}