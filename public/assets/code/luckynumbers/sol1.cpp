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
    for (int i = 0; i < lucky.size(); ++i) {
        if (lucky[i] > n) {
            if (lucky[i - 1] == n) {
                cout << lucky[i - 2] << " ";
            } else {
                cout << lucky[i - 1] << " ";
            }
            cout << lucky[i] << endl;
            break;
        }
    }

    return 0;
}
