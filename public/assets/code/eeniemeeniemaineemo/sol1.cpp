// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, words;
    cin >> n >> words;

    vector<int> people(n);
    for (int i = 0; i < n; ++i) {
        people[i] = i;
    }

    int point = 0;
    while (people.size() > 1) {
        point = (point + words - 1) % people.size();
        people.erase(people.begin() + point);
    }

    cout << people[0] + 1 << endl;
    return 0;
}
