// Solution author: Alex Pylypenko
#include <bits/stdc++.h>
using namespace std;

int number_of_digits_before_number(int n) {
    int num_digits = floor(log10(n) + 1);
    int to_decrease = (pow(10, num_digits) - 1) / 9;

    return (n + 1) * num_digits - to_decrease - to_string(n).length();
}

char solve(long long x) {
    int num_digits_in_answer = 0;

    for (int i = 0; i < 100; ++i) {
        num_digits_in_answer = i;
        long long new_x = number_of_digits_before_number(pow(10, i));
        if (x < new_x) {
            break;
        }
    }

    x -= number_of_digits_before_number(pow(10, num_digits_in_answer - 1));
    long long number_position = x / num_digits_in_answer;
    int digit = x % num_digits_in_answer;

    return to_string(number_position + pow(10, num_digits_in_answer - 1))[digit];
}

int main() {
    int n;
    long long i;
    cin >> n >> i;
    cout << solve(i + number_of_digits_before_number(n) - 1) << endl;
    return 0;
}
