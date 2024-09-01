#include <bits/stdc++.h>

using namespace std;

int main() {
    vector<int> nums(5);
    cout << "Please enter 5 numbers: ";
    
    // Read the input and store it in nums
    for (int i = 0; i < 5; ++i) {
        cin >> nums[i];
    }

    int score = 0;

    // Check for duplicate numbers
    for (int i = 0; i < 5; ++i) {
        for (int j = i + 1; j < 5; ++j) {
            if (nums[i] == nums[j]) {
                score++;
            }
        }
    }

    // Check for subsets with sum equal to 15
    for (int i = 0; i < 32; ++i) { // 2^5 = 32 subsets
        int s = 0;
        for (int j = 0; j < 5; ++j) {
            if ((i >> j) & 1) {
                s += nums[j];
            }
        }
        if (s == 15) {
            score++;
        }
    }

    cout << score << endl;

    return 0;
}
