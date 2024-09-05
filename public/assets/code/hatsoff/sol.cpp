#include <bits/stdc++.h>

using namespace std;

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int main() {
  // take inputs
  int c;
  cin >> c;
  vector<vector<int>> table(1 << c);
  vector<int> idxmap(1 << c);
  for (int i=0; i<(1 << c); i++) {
    string s;
    cin >> s;
    vector<int> row(c);
    int idx = 0;
    for (int i=0; i<c; i++) {
      if (s[i] == 'u') row[i] = 1;
      if (s[i] == 'd') row[i] = -1;
      if (s[i] == 'd' || s[i] == 'p')
        idx ^= 1 << i;
    }
    table[idx] = row;
    idxmap[idx] = i + 1;
  }

  // simulate until repeat
  vector<int> curr(c, 0);
  vector<int> transitions;
  map<vector<int>,int> mp;
  mp[curr] = 0;
  int left = -1, right = 0;
  while (left == -1) {
    int idx = 0;
    for (int i=0; i<c; i++) {
      if (curr[i] == 1) 
        idx ^= 1 << i;
    }
    for (int i=0; i<c; i++) {
      curr[i] += table[idx][i];
    }
    if (mp.count(curr))
      left = mp[curr];
    mp[curr] = ++right;
    transitions.push_back(idxmap[idx]);
  }

  // find indices in repeat
  vector<int> ans;
  for (int i=left; i<right; i++) {
    ans.push_back(transitions[i]);
  }

  // print ans
  cout << ans.size() << "\n";
  for (int x : ans) 
    cout << x << " ";
  cout << "\n";

  return 0;
}