#include <bits/stdc++.h>

using namespace std;

int main()
{
    string input;
    cin >> input;

    vector<int> digits(10);
    int question_mark = 0;
    for (int i = 0; i < 10; i++)
    {
        if (input[i] == 'X')
        {
            digits[i] = 10;
        }
        else if (input[i] == '?')
        {
            digits[i] = -1;
            question_mark = i;
        }
        else
        {
            digits[i] = input[i] - '0';
        }
    }

    for (int digit = 0; digit < 10; digit++)
    {
        digits[question_mark] = digit;

        int sum = 0;
        for (int i = 0; i < 10; i++)
        {
            sum += digits[i] * (10 - i);
        }

        if (sum % 11 == 0)
        {
            cout << digit << endl;
            break;
        }
    }

    return 0;
}
