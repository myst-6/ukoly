#include <bits/stdc++.h>

using namespace std;

#define int unsigned long long

ifstream fin("input.txt");
ofstream fout("output.txt");

#define cin fin
#define cout fout

int numTicks(int n, int prevParity = 0) {
    int res = 0;
    if (n < 10) {
        /*
         * Determines number of units digits corresponding to a tick,
         * given the parity of the previous digits
         */
        for (int i = 0; i < n; i++)
            if ((i + prevParity) % 2 == 0)
                res++;
    } else {
        /*
         * Adding the number of ticks across all times where the first digit
         * is lower than the first digit of n
         */
        int pow10 = (int) powl(10L, floorl(log10l((long double) n)));
        int firstDigit = n / pow10;
        res += firstDigit * pow10 / 2;
        /*
         * All other ticks up to n exclusive have the same first digit as n, so parity is
         * updated accordingly
         */
        prevParity += firstDigit;
        prevParity %= 2;
        int restDigits = n % (firstDigit * pow10);
        res += numTicks(restDigits, prevParity);
    }
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