// Solution Author: Adwaya Gupta
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    float interest, repayment; cin >> interest >> repayment;
    interest = interest / 100 + 1;
    repayment /= 100;

    int debt = 10000, ans = 0;
    while (debt > 0) {
        debt = ceil(debt*interest);
        int repaid = min(max((int) ceil(debt * repayment), 5000), debt);
        debt -= repaid;
        ans += repaid;
    }
    printf("%.2f", ans/100.0);

    return 0;
}
