#include <bits/stdc++.h>
using namespace std;

long long number_of_digits_before_number(long long n) {
    long long num_digits = floor(log10(n) + 1);
    long long to_decrease = (pow(10, num_digits) - 1) / 9;

    return (n + 1) * num_digits - to_decrease - to_string(n).length();
}

char solve(long long x) {
    long long num_digits_in_answer = 0;

    for (long long i = 0; i < 100; ++i) {
        num_digits_in_answer = i;
        long long new_x = number_of_digits_before_number(pow(10, i));
        if (x < new_x) {
            break;
        }
    }

    x -= number_of_digits_before_number(pow(10, num_digits_in_answer - 1));
    long long number_position = x / num_digits_in_answer;
    long long digit = x % num_digits_in_answer;

    return to_string(number_position + pow(10, num_digits_in_answer - 1))[digit];
}

int main() {
    long long n;
    long long i;
    cin >> n >> i;
    cout << solve(i + number_of_digits_before_number(n) - 1) << endl;
    return 0;
}
