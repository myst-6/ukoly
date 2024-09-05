#include <bits/stdc++.h>

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int main() {
  int n;
  cin >> n;
  vector<int> nxt(n+2);
  for (int i=1; i<=n; i++) cin >> nxt[i];
  nxt[n+1] = n+1;
  vector<bool> vis(n+1);
  vector<vector<int>> cycles;
  for (int i=1; i<=n; i++) {
    if (!vis[i]) {
      int curr = i;
      vector<int> cycle;
      while (!vis[curr]) {
        vis[curr] = true;
        cycle.push_back(curr);
        curr = nxt[curr];
      }
      // fix memory bug?
      if (cycle.size() > 1)
        cycles.push_back(cycle);
    }
  }
  auto add = [&](int i, int j) {
    cout << nxt[i] << " " << nxt[j] << "\n";
    swap(nxt[i], nxt[j]);
  };
  int ct = 0;
  for (vector<int> &cycle : cycles) {
    int V = (int) cycle.size();
    if (V == 1) continue;
    ++ct;
    // cyclic shift
    add(n+1, cycle[V-1]);
    for (int i=0; i<V; i++) {
      add(0, cycle[i]);
    }
    add(n+1, cycle[0]);
  }
  if (ct % 2) add(0, n+1);
  cout << "-1 -1\n";
  return 0;
}