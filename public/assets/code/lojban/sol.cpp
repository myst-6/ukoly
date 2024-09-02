#include <bits/stdc++.h>
using namespace std;

vector<string> key = {"no" , "pa" , "re" , "ci", "vo", "mu", "xa", "ze" , "bi" , "so"};

int main() {
  string lobjan; cin >> lobjan;
  string ans;

  for (int i = 0; i < lobjan.length(); i += 2) {
    string f = lobjan.substr(i, 2);
    ans += to_string(find(key.begin(), key.end(), f) - key.begin());
  }
  cout << ans;
  return 0;
}
