#include <bits/stdc++.h>
using namespace std;

vector<int> r1 = {0, 3, 1, 2};
vector<int> r2 = {0, 2, 1, 3};

void rotate(vector<int>& r) {
    for (int i = 0; i < 4; ++i)
        r[i] = (r[i] + 1) % 4;
    int temp = r[0];
    r.erase(r.begin());
    r.push_back(temp);
}

char getOut(char x) {
    int idx = x - 'A';
    int right = r2[r1[idx]];
    int r = 3 - right;
    return 'A' + find(r1.begin(), r1.end(), find(r2.begin(), r2.end(), r) - r2.begin()) - r1.begin();
}

int main() {
    int rots;
    cin >> rots;
    for (int i = 0; i < rots % 4; ++i) rotate(r1);
    for (int i = 0; i < (rots / 4) % 4; ++i) rotate(r2);

    string encrypt;
    cin >> encrypt;
    string out;
    for (char c : encrypt) {
        out += getOut(c);
        rotate(r1);
        rots++;
        if (rots % 4 == 0) rotate(r2);
    }

    cout << out << endl;
    return 0;
}
