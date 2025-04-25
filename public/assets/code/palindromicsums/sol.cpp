// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

bool isPal(string s) {
    return s == string(s.rbegin(), s.rend());
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    set<int> palindromes;
    for (int i = 1; i < 1000000; i++) 
        if (isPal(to_string(i))) 
            palindromes.insert(i);

    int n; cin >> n;
    if (palindromes.count(n)) {
        cout << n << endl;
        return 0;
    }

    for (int i : palindromes) 
        if (palindromes.count(n - i)) {
            cout << i << " " << n - i << endl;
            return 0;
        }

    for (int i : palindromes) 
        for (int j : palindromes) 
            if (palindromes.count(n - i - j)) {
                cout << i << " " << j << " " << n - i - j << endl;
                return 0;
            }

    return 0;
}
