#include <bits/stdc++.h>

using namespace std;

// Function to perform BFS to find the shortest path from a to b
int solve(int a, int b, const vector<vector<int>>& adjlist) {
    vector<bool> visited(1000, false);
    visited[a] = true;
    queue<pair<int, int>> q;
    q.push({a, 0});

    while (!q.empty()) {
        auto [curr, dist] = q.front();
        q.pop();

        if (curr == b) {
            return dist;
        }

        for (int i : adjlist[curr]) {
            if (!visited[i]) {
                visited[i] = true;
                q.push({i, dist + 1});
            }
        }
    }
    return -1; // In case there's no valid path
}

int main() {
    vector<string> digits = {"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"};
    vector<string> nums(1000);

    for (int i = 0; i < 1000; ++i) {
        string curr = "";
        int a = i;
        while (a > 0) {
            curr = digits[a % 10] + curr;
            a /= 10;
        }
        nums[i] = curr;
    }

    vector<vector<int>> counters(1000, vector<int>(26, 0));

    for (int i = 0; i < 1000; ++i) {
        for (char j : nums[i]) {
            counters[i][j - 'A']++;
        }
    }

    vector<vector<int>> adjlist(1000);

    for (int i = 0; i < 1000; ++i) {
        for (int j = i + 1; j < 1000; ++j) {
            int diff = 0;
            for (int k = 0; k < 26; ++k) {
                diff += abs(counters[i][k] - counters[j][k]);
            }
            if (diff <= 5) {
                adjlist[i].push_back(j);
                adjlist[j].push_back(i);
            }
        }
    }

    int a, b, c, d, e, f;
    cin >> a >> b;
    cin >> c >> d;
    cin >> e >> f;

    cout << solve(a, b, adjlist) << endl;
    cout << solve(c, d, adjlist) << endl;
    cout << solve(e, f, adjlist) << endl;

    return 0;
}
