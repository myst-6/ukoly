// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

unordered_set<int> getFactors(int n) {
    unordered_set<int> factors;
    for (int i = 2; i <= sqrt(n); ++i) {
        if (n % i == 0) {
            factors.insert(i);
            factors.insert(n / i);
        }
    }
    return factors;
}

int main() {
    int n;
    cin >> n;
    vector<int> moplen(n + 1, INT_MAX);
    moplen[0] = 0;

    for (int i = 1; i <= n; ++i) {
        moplen[i] = min(moplen[i], moplen[i - 1] + 1);
        unordered_set<int> factors = getFactors(i);
        for (int f : factors) {
            moplen[i] = min(moplen[i], moplen[i / f] + moplen[f]);
        }
    }

    cout << moplen[n] << endl;
    return 0;
}
