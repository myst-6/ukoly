#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int c1, c2; cin >> c1 >> c2;
    int time1 = 0, time2 = 0;

    do {
        time1 = (time1 + c1 + 60) % 1440;
        time2 = (time2 + c2 + 60) % 1440;
    } while (time1 != time2);
    
    if (time1/60 < 10) cout << "0";
    cout << time1 / 60 << ":";
    if (time1 % 60 < 10) cout << "0";
    cout << time1 % 60 << "\n";

    return 0;
}
