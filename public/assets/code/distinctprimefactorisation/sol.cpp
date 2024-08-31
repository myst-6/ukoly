// Solution author: Alex Pylypenko
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Please enter a number: ";
    cin >> n;

    int answer = 1;

    for (int i = 2; i <= n; ++i) {
        if (n % i == 0) {
            answer *= i;
            while (n % i == 0) {
                n /= i;
            }
        }
    }

    cout << answer << endl;

    return 0;
}
