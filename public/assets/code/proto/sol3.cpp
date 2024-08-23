// author: myst-6

#include <bits/stdc++.h>

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout
#define int unsigned int

const int inf = -1;
const int maxn = 1 << 18;
int X[maxn], Y[maxn], order[maxn], tmp[maxn], contribution[maxn];
bool isleft[maxn];
int n;

void dc2(int l, int m, int r) {
  int best = inf;
  for (int i=l; i<=r; i++) {
    int curr = X[order[i]] + Y[order[i]];
    if (isleft[i]) {
      if (best != inf) {
        contribution[order[i]] = min(contribution[order[i]], best - curr);
      }
    } else {
      best = min(best, curr);
    }
  }
}

void dc1(int l, int r) {
  // divide and conquer
  if (l >= r) return;
  int m = (l + r) / 2;
  dc1(l, m); dc1(m+1, r);

  // merge sort
  int lptr = l, rptr = m+1, optr = l;
  while (lptr <= m && rptr <= r) {
    if (Y[order[lptr]] > Y[order[rptr]]) {
      isleft[optr] = 1;
      tmp[optr++] = order[lptr++];
    } else {
      isleft[optr] = 0;
      tmp[optr++] = order[rptr++];
    }
  }  
  while (lptr <= m) {
    isleft[optr] = 1;
    tmp[optr++] = order[lptr++];
  }
  while (rptr <= r) {
    isleft[optr] = 0;
    tmp[optr++] = order[rptr++];
  }

  // solve across halves
  for (int i=l; i<=r; i++) {
    order[i] = tmp[i];
  }
  dc2(l, m, r);
}

signed main() {
  // take inputs
  cin >> n;
  for (int i=0; i<n; i++) {
    cin >> X[i] >> Y[i];
    contribution[i] = inf;
    order[i] = i;
  }

  // begin d&c
  sort(order, order + n, [&](int i, int j) -> bool { return X[i] < X[j]; });
  dc1(0, n-1);

  // print ans
  long long ans = 0;
  for (int i=0; i<n; i++) {
    if (contribution[i] != inf) {
      ans += contribution[i];
    }
  }
  cout << ans << "\n";

  return 0;
}