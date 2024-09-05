#include <bits/stdc++.h>

using namespace std;

int main() {
    string input;
    cout << "Please enter a decimal number: ";
    cin >> input;

    // Find the position of the decimal point
    size_t decimal_pos = input.find('.');

    // Initialize numerator and denominator
    long long num;
    int denom = 1;

    if (decimal_pos != string::npos) {  // If there is a decimal point
        // Calculate the number of digits after the decimal
        int digits_after_decimal = input.length() - decimal_pos - 1;

        // Remove the decimal point from the string and convert to integer
        input.erase(decimal_pos, 1);
        num = stoll(input);

        // Denominator is 10 raised to the power of digits after the decimal
        denom = pow(10, digits_after_decimal);
    } else {
        // If no decimal point, the input is a whole number
        num = stoll(input);
    }

    // Calculate the greatest common divisor (GCD) to simplify the fraction
    int g = gcd(num, denom);

    // Simplify the numerator and denominator
    num /= g;
    denom /= g;

    // Output the fraction
    cout << num << "/" << denom << endl;

    return 0;
}
