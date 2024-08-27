#include <bits/stdc++.h> 
using namespace std; 

int main() {
    string s; 
    cin >> s; 
    int n = ssize(s); 

    function<int(string)> solve = [&] (const string &t) {
        int res = 1; 
        for (int i=1; i<=ssize(t)/2; i++) {
            if (t.substr(0,i) == t.substr(ssize(t)-i,i)) {
                res += solve(t.substr(i, ssize(t)-2*i)); 
            }
        }
        return res; 
    }; 

    cout << solve(s) - 1 << '\n'; 

    return 0; 
}