#include <bits/stdc++.h>

using namespace std;

const int inf = 1<<30;

int main() {
  int h;
  cin >> h;
  vector<vector<int>> adj(h);
  while (true) {
    int u, v;
    cin >> u >> v;
    if (u == -1) break;
    u--, v--;
    adj[u].push_back(v);
    adj[v].push_back(u);
  }

  auto bfs = [&](int start, vector<int> &dist, function<void(int)> ev) {
    dist.assign(h, inf);
    dist[start] = 1;
    queue<pair<int,int>> Q;
    Q.push({start, -1});
    while (Q.size()) {
      auto [u, p] = Q.front(); Q.pop();
      for (int v : adj[u]) {
        if (v == p) continue;
        if (dist[v] == inf) {
          dist[v] = dist[u] + 1;
          Q.push({v, u});
        } else if (v == start) {
          ev(dist[u]);
        }
      }
    }
  };

  int ans = h;

  vector<int> dist_from_root(h);
  bfs(0, dist_from_root, [&](int _a, int _b) {});
  for (int i=1; i<h; i++) {
    if (adj[i].size() < 3) {
      ans = min(ans, dist_from_root[i]);
    }
  } 
  if (adj[0].size() < 2) {
    ans = min(ans, 1);
  }

  for (int i=0; i<h; i++) {
    int d = dist_from_root[i];
    vector<int> dist_from_i(h);
    bfs(i, dist_from_i, [&](int x) {
      ans = min(ans, d + x - 2);
    });
  }

  cout << ans << "\n";

  return 0; 
}