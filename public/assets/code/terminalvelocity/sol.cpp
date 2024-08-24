#include <bits/stdc++.h>
#define int long long
using namespace std;

signed main() {
    int p;
    cin >> p;
    vector<int> count_below(p);
    vector<int> position(p);
    for (int i=0; i<p; i++) {
        count_below[i] = i;
    }


    while (1) {
        int x,y; cin >> x >> y; 
        if (x==-1 && y==-1) {       //reached end of input
            break;
        }
        x--; y--;
        if (x > y) swap(x, y);
        count_below[x]++;
        count_below[y]--;
    }

    for (int i=0; i<p; i++) {
        position[count_below[i]] = i;
    }

    for (int i=0; i<p; i++) {
        cout << position[i] + 1 <<" ";
    }
    cout << endl;
}
