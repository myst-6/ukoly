// author: myst-6

#include <bits/stdc++.h>

using namespace std;
using ll = long long;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int p, sum;
  cin >> p >> sum;
  vector count(p + 1, vector<ll>(sum + 1));
  count[0][0] = 1;
  for (int i=0; i<p; i++) {
    for (int j=0; j<=sum; j++) {
      for (int k=0; k<=sum-j; k++) {
        count[i+1][j+k] += count[i][j];
      }
    }
  }
  cout << count[p][sum] << "\n";
  return 0;
}