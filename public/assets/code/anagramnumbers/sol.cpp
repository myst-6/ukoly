#include <bits/stdc++.h>

using namespace std;

int main() {
    int num;
    cin >> num;

    string digits = to_string(num);
    sort(digits.begin(), digits.end());

    vector<int> answers;

    for (int i = 2; i <= 9; ++i) {
        int num2 = num * i;
        string digits2 = to_string(num2);
        sort(digits2.begin(), digits2.end());

        if (digits == digits2) {
            answers.push_back(i);
        }
    }

    if (!answers.empty()) {
        for (size_t i = 0; i < answers.size(); ++i) {
            cout << answers[i];
            if (i < answers.size() - 1) {
                cout << " ";
            }
        }
        cout << endl;
    } else {
        cout << "NO" << endl;
    }

    return 0;
}
