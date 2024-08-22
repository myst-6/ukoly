// author: myst-6

#include <bits/stdc++.h>

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int main() {
  int n;
  cin >> n;
  int Z = n/2;
  vector<vector<int>> adj(Z);
  for (int i=0; i<n/2; i++) {
    int u, v;
    cin >> u >> v;
    if (u/2 == v/2) continue;
    if (u%2 == v%2) {
      adj[u/2].push_back(v/2);
      adj[v/2].push_back(u/2);
    } else {
      adj[u/2].push_back(Z);
      adj[v/2].push_back(Z);
      adj.push_back({u/2, v/2});
      Z += 1;
    }
  }
  vector<bool> swap(Z), vis(Z);
  function<void(int)> dfs = [&](int u) {
    stack<int> U;
    U.push(u);
    while (U.size()) {
      int u = U.top();
      U.pop();
      if (vis[u]) continue;
      vis[u] = 1;
      for (int v : adj[u]) {
        if (vis[v]) continue;
        swap[v] = !swap[u];
        U.push(v);
      }
    }
  };
  for (int i=0; i<Z; i++) {
    dfs(i);
  }
  for (int i=0; i<n/2; i++) {
    if (swap[i]) {
      cout << "BA";
    } else {
      cout << "AB";
    }
  }
  cout << "\n";
  return 0;
}