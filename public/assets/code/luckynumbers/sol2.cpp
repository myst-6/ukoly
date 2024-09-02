// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    vector<int> lucky;
    for (int i = 1; i < 10100; i += 2) {
        lucky.push_back(i);
    }

    int i = 3;
    int ind = 1;
    while (i < lucky.size()) {
        int j = i - 1;
        while (j < lucky.size()) {
            lucky.erase(lucky.begin() + j);
            j += i - 1;
        }
        ind += 1;
        i = lucky[ind];
    }

    int n;
    cin >> n;
    auto it = upper_bound(lucky.begin(), lucky.end(), n);
    int r = it - lucky.begin();
    cout << lucky[(lucky[r - 1] == n) ? r-2 : r-1] << " " << lucky[r] << endl;

    return 0;
}
