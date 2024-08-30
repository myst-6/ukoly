// Solution author: Alex Pylypenko
#include <bits/stdc++.h>

using namespace std;

int main() {
    char a, b;
    int n;
    cout << "Please enter two capital letters and a positive integer: ";
    cin >> a >> b >> n;

    int a_val = a - 'A' + 1; // Convert to 1-based index
    int b_val = b - 'A' + 1; // Convert to 1-based index

    if (n == 1) {
        cout << a << endl;
    } else {
        for (int i = 0; i < n - 2; ++i) {
            int temp = b_val;
            b_val = ((a_val + b_val - 1) % 26) + 1;
            a_val = temp;
        }
        cout << char(b_val + 'A' - 1) << endl;
    }

    return 0;
}
