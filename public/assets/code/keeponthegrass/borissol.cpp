#include <bits/stdc++.h>

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int main() {
  int X, Y;
  cin >> X >> Y;
  vector<pair<int,int>> path;
  function<pair<int,pair<int,int>>(int,pair<int,int>)> rec = [&](int n, pair<int,int> centre) -> pair<int,pair<int,int>> {
    // move centre in direction of pos, by 1 << (n - 1)
    int dx = X - centre.first;
    int dy = Y - centre.second;
    if (dx == 0 && dy == 0) return {0, centre};
    pair<int,int> nxt;
    if (max(abs(dx), abs(dy)) == abs(dx)) {
      // horizontal
      if (dx < 0) nxt = {centre.first - (1 << (n - 1)), centre.second};
      else nxt = {centre.first + (1 << (n - 1)), centre.second};
    } else {
      // vertical
      if (dy < 0) nxt = {centre.first, centre.second - (1 << (n - 1))};
      else nxt = {centre.first, centre.second + (1 << (n - 1))};
    }
    pair<int,pair<int,int>> data = rec(n - 1, nxt);
    path.push_back(data.second);
    return {1 << ((n - 1) + data.first), centre};
  };
  rec(18, {0, 0});
  path.push_back({0, 0});
  for (int i=1; i<(int)path.size()-1; i++) {
    if (path[i-1].first == path[i].first && path[i].first == path[i+1].first) {
      path.erase(path.begin() + i);
      --i;
    } else if (path[i-1].second == path[i].second && path[i].second == path[i+1].second) {
      path.erase(path.begin() + i);
      --i;
    }
  }
  int ans = 0;
  for (int i=0; i<(int)path.size()-1; i++) {
    ans += abs(path[i].first - path[i+1].first) + abs(path[i].second - path[i+1].second);
  }
  cout << ans + 1 << "\n";
  return 0;
}