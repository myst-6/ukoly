#include <bits/stdc++.h>

using namespace std;

#define int long long
int NUM_PEGS = 4;

vector<stack<int>> inputState() {
    vector<stack<int>> res(NUM_PEGS);
    string s;
    for (int i = 0; i < NUM_PEGS; i++) {
        cin >> s;
        for (char c : s)
            res[i].push(c - '0');
        while (!res[i].empty() && res[i].top() == 0)
            res[i].pop();
    }
    return res;
}

vector<stack<int>> movePeg(vector<stack<int>> state, int from, int to) {
    int x = state[from].top();
    state[from].pop();
    state[to].push(x);
    return state;
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    vector<stack<int>> startState = inputState(), finishState = inputState();
    set<vector<stack<int>>> visited;
    queue<pair<vector<stack<int>>, int>> bfsQueue;
    bfsQueue.emplace(startState, 0);
    while (!bfsQueue.empty()) {
        auto [state, dist] = bfsQueue.front();
        bfsQueue.pop();
        if (visited.count(state))
            continue;
        visited.insert(state);
        if (state == finishState) {
            cout << dist << endl;
            break;
        }
        for (int i = 0; i < NUM_PEGS; i++) {
            if (state[i].empty())
                continue;
            for (int j = 0; j < NUM_PEGS; j++) {
                if (i == j)
                    continue;
                auto newState = movePeg(state, i, j);
                bfsQueue.emplace(newState, dist + 1);
            }
        }
    }
    return 0;
}