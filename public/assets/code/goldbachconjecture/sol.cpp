#include <bits/stdc++.h>

using namespace std;

// Function to check if a number is prime
bool is_prime(int x) {
    if (x == 1)
        return false;
    for (int i = 2; i <= sqrt(x); i++) {
        if (x % i == 0)
            return false;
    }
    return true;
}

int main() {
    int a;
    cin >> a;

    int ways = 0;
    for (int num1 = 0; num1 <= a / 2; num1++) {
        int num2 = a - num1;
        if (is_prime(num1) && is_prime(num2)) {
            ways++;
        }
    }

    cout << ways << endl;

    return 0;
}
