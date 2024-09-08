#include <bits/stdc++.h>
using namespace std;

vector<vector<long long>> combs_cache;

long long combs(int ones, int length) {
    if (length < 0) return 0;
    if (ones < 0) return 0;
    if (length == 0) return ones == 0;
    
    if (combs_cache[ones][length] != -1) {
        return combs_cache[ones][length];
    }
    
    return combs_cache[ones][length] = combs(ones, length - 1) + combs(ones - 1, length - 1);
}

string solve(int ones, int length, long long& ways, long long n) {
    if (ones == 0) return string(length, '0');
    if (length == 1) return (ones == 0) ? "0" : "1";
    
    if (ways + combs(ones, length - 1) < n) {
        ways += combs(ones, length - 1);
        return "1" + solve(ones - 1, length - 1, ways, n);
    }
    return "0" + solve(ones, length - 1, ways, n);
}

int main() {
    long long n, m;
    cin >> n >> m;

    if (m == 0) {
        cout << '0' << endl;
        return 0;
    }

    combs_cache = vector<vector<long long>>(m + 1, vector<long long>(100, -1));

    long long length = 0, ways = 0;

    while (ways + combs(m - 1, length - 1) < n) {
        ways += combs(m - 1, length - 1);
        length++;
    }

    string ans = "1" + solve(m - 1, length - 1, ways, n);
    for (size_t i = 0; i < ans.size(); i += 6) {
        cout << ans.substr(i, 6) << ' ';
    }
    cout << endl;

    return 0;
}
