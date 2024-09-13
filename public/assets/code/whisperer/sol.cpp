// author: myst-6

#include <bits/stdc++.h>

using namespace std;
using ll = long long;

const int P = 31;

ll powP[12];

int main() {
  int p; ll n;
  cin >> p >> n;
  n -= 1;
 
  int X = 0;
  vector<int> a(p);
  for (int i=0; i<p; i++) {
    cin >> a[i];
    X += a[i];
  }
  X /= p;

  ll code = 0, sought = 0;
  powP[0] = 1;
  for (int i=0; i<p; i++) {
    code += a[i] * powP[i];
    sought += X * powP[i];
    powP[i+1] = powP[i] * P;
  }

  function<int(ll,int)> get = [&](ll code, int i) -> int {
    code %= powP[i+1];
    return code / powP[i];
  };
  
  function<ll(ll,int)> do_swap = [&](ll code, int i) -> ll {
    int l = get(code, i);
    int r = get(code, (i+1)%p);
    
    if (l-1 < 0) return -1;
    if (r+1 >= p) return -1;

    code -= powP[i] * l;
    code -= powP[(i+1)%p] * r;
    code += powP[i] * (r + 1);
    code += powP[(i+1)%p] * (l - 1);
    
    return code;
  };

  queue<pair<int,ll>> Q;
  map<ll,int> dist;
  stack<ll> order;

  dist[code] = 0;
  Q.push({0, code});

  while (Q.size()) {
    auto [curdist, code] = Q.front(); Q.pop();
    order.push(code);
    if (sought == code) break;
    for (int i=0; i<p; i++) {
      ll code2 = do_swap(code, i);
      if (code2 != -1 && dist.count(code2) == 0) {
        dist[code2] = curdist + 1;
        Q.push({curdist + 1, code2});
      }
    }
  }

  map<ll,ll> dp;
  while (order.size()) {
    ll code = order.top(); order.pop();
    if (code == sought) {
      dp[code] = 1;
    } else {
      for (int i=0; i<p; i++) {
        ll code2 = do_swap(code, i);
        if (code2 != -1 && dist[code2] == dist[code] + 1) {
          dp[code] += dp[code2];
        }
      }
    }
  }

  string ans;
  while (code != sought) {
    for (int i=0; i<p; i++) {
      ll code2 = do_swap(code, i);
      if (code2 != -1 && dist[code2] == dist[code] + 1) {
        if (n >= dp[code2]) {
          n -= dp[code2];
        } else {
          code = code2;
          ans += 'A' + i;
          break;
        }
      }
    }
  }

  cout << ans << "\n";

  return 0;
}