// Solution author: Vladimir Filip
#include <bits/stdc++.h>
using namespace std;

int getLargestFibonacci(int n) {
    // Returns the largest Fibonacci number lower than or equal to n
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    int a = 1, b = 2;
    while (b <= n) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}

int main() {
    int n;
    cin >> n;
    
    vector<int> nums;
    while (n > 0) {
        int largestFibo = getLargestFibonacci(n);
        nums.push_back(largestFibo);
        n -= largestFibo;
    }
    
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}
