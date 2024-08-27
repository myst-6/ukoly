#include <bits/stdc++.h>

using namespace std;

#define int long long

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int getParity(int x) {
    int parity = 0;
    while (x > 0) {
        parity += x % 10;
        parity %= 2;
        x /= 10;
    }
    return parity;
}

int numTicks(int n) {
    int m_n = n / 10;
    int r_n = n % 10;
    int parity = getParity(m_n);
    int res = 5 * m_n;
    for (int r = 0; r < r_n; r++)
        if ((r + parity) % 2 == 0)
            res++;
    return res;
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    int f, l;
    vector<pair<int, int>> intervals;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    for (int i = 0; i < n; i++) {
        cin >> f >> l;
        pq.emplace(f, l);
    }
    while (!pq.empty()) {
        auto p = pq.top();
        pq.pop();
        if (intervals.empty() || p.first > intervals.back().second + 1)
            intervals.push_back(p);
        else {
            intervals.back().second = max(intervals.back().second,
                                          p.second);
        }
    }
    int a = 0, b = 0;
    for (auto [start, end]: intervals) {
        a += end - start + 1;
        b += numTicks(end + 1) - numTicks(start);
    }
    cout << a << " " << b << endl;
    return 0;
}