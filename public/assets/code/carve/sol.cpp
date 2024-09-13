// author: myst-6

#include <bits/stdc++.h>

using namespace std;

// memory limit prevents long long :sob:
#define int unsigned int 

// prefix sums of rectangle
int pre[2048][2048];
int m, r, c;

// get sum of values on row
int rowsum(int row, int left, int right) {
  int ans = pre[row][right];
  if (row > 0)
    ans -= pre[row-1][right];
  if (left > 0)
    ans -= pre[row][left-1];
  if (left > 0 && row > 0)
    ans += pre[row-1][left-1];
  return ans;
}

// get sum of values in column
int colsum(int col, int lo, int hi) {
  int ans = pre[hi][col];
  if (col > 0)
    ans -= pre[hi][col-1];
  if (lo > 0)
    ans -= pre[lo-1][col];
  if (col > 0 && lo > 0)
    ans += pre[lo-1][col-1];
  return ans;
}

// find largest row length if at most X left operations are taken
int simulate_row(int X) {
  int lo = 0, hi = r-1;
  int left = 0, right = c-1;
  while (lo < hi) {
    if (rowsum(lo, left, right) <= m) {
      lo += 1;
    } else if (rowsum(hi, left, right) <= m) {
      hi -= 1;
    } else if (colsum(left, lo, hi) <= m && left < X) {
      left += 1;
    } else if (colsum(right, lo, hi) <= m) {
      right -= 1;
    } else {
      return 0;
    }
  }
  // not required, but simplifies explanation
  if (left != X) {
    return 0;
  }
  while (rowsum(lo, left, right) > m) {
    if (colsum(left, lo, hi) <= m && left < X) {
      left += 1;
    } else if (colsum(right, lo, hi) <= m) {
      right -= 1;
    } else {
      return 0;
    }
  }
  return right - left + 1;
}

// find largest col length if at most X lo operations are taken
int simulate_col(int X) {
  int lo = 0, hi = r-1;
  int left = 0, right = c-1;
  while (left < right) {
    if (colsum(left, lo, hi) <= m) {
      left += 1;
    } else if (colsum(right, lo, hi) <= m) {
      right -= 1;
    } else if (rowsum(lo, left, right) <= m && lo < X) {
      lo += 1;
    } else if (rowsum(hi, left, right) <= m) {
      hi -= 1;
    } else {
      return 0;
    }
  }
  // not required, but simplifies explanation
  if (lo != X) {
    return 0;
  }
  while (colsum(left, lo, hi) > m) {
    if (rowsum(lo, left, right) <= m && lo < X) {
      lo += 1;
    } else if (rowsum(hi, left, right) <= m) {
      hi -= 1;
    } else {
      return 0;
    }
  }
  return hi - lo + 1;
}

signed main() {
  // take inputs
  cin >> m >> r >> c;
  for (int i=0; i<r; i++) {
    for (int j=0; j<c; j++) {
      cin >> pre[i][j];
    }
    for (int j=1; j<c; j++) {
      pre[i][j] += pre[i][j-1];
    }
  }
  for (int i=1; i<r; i++) {
    for (int j=0; j<c; j++) {
      pre[i][j] += pre[i-1][j];
    }
  }
  
  // find best ans
  int ans = 0;
  for (int X=0; X<c; X++) {
    ans = max(ans, simulate_row(X));
  }
  for (int X=0; X<r; X++) {
    ans = max(ans, simulate_col(X));
  }

  // print actual ans
  cout << r + c - ans << "\n";

  return 0;
}