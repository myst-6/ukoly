#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <cstring>

using namespace std;

unordered_map<char, int> conversion;
vector<int> order;
int n;
int memo[(1 << 18)][19][19];

pair<int, pair<int, int>> CheckPrefix(vector<int> order) {

    int a = n; 
    int b = n;

    for (int j : order) {
        if (j > b) {
            return {1, {0, 0}};
        }
        if (j > a) {
            b = j;
        } else {
            a = j;
        }
    }
    return {0, {a, b}};
}

int Construct(int remaining, int a, int b) {

    if (a > b) return 0;

    if (remaining == 0) {
        return 1;
    }

    int &res = memo[remaining][a][b];
    if (res != -1) return res;

    res = 0;

    for (int element = 0; element < n; element++) {

        if ((remaining & (1 << element)) == 0) continue;
        if (element > b) continue;

        int next_a = a;
        int next_b = b;

        if (element > a) {
            next_b = element;
        } else {
            next_a = element;
        }

        res += Construct(remaining ^ (1 << element), next_a, next_b);
    }

    return res;
}


int main() {

    memset(memo, -1, sizeof(memo));

    string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (int i = 0; i < 26; i++) {
        conversion[letters[i]] = i;
    }

    cin >> n;
    int remaining = (1 << n) - 1;

    string prefix;
    cin >> prefix;

    for (char c : prefix) {
        int idx = conversion[c];
        order.push_back(idx);
        remaining ^= (1 << idx);
    }

    auto Checker = CheckPrefix(order);

    if (Checker.first == 1) {
        cout << 0;
        return 0;
    }

    cout << Construct(remaining, Checker.second.first, Checker.second.second);
}
