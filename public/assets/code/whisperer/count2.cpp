// author: myst-6

#include <bits/stdc++.h>

using namespace std;
using ll = long long;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int p;
  cin >> p;
  vector count(p + 1, vector<ll>(p * (p - 1) + 1));
  count[0][0] = 1;
  for (int i=0; i<p; i++) {
    for (int j=0; j<=p*(p-1); j++) {
      for (int k=0; k<p; k++) {
        if (j+k <= p*(p-1)) {
          count[i+1][j+k] += count[i][j];
        }
      }
    }
  }
  ll worst = 0;
  for (int mean=0; mean<p; mean++) {
    worst = max(worst, count[p][p*mean]);
  }
  cout << worst << "\n";
  return 0;
}