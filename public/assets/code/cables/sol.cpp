#include <bits/stdc++.h>
using namespace std;
#define all(x) x.begin(), x.end()
#define pb push_back
#define pii pair<int, int>
#define mk make_pair

int32_t main()
{
    ifstream cin("input.txt");
    ofstream cout("output.txt");
    int s, l;
    cin >> s >> l;

    vector<pair<pii, int>> points(s*l);
    for (int i=0; i<s*l; i++) {
        int x, y;
        cin >> x >> y;
        points[i] = mk(mk(x, y), i+1);
    }
    
    sort(all(points));
    for (int i=0; i<s*l; i+=s) {
        vector<pair<pii, int>> curr;
        for (int j=i; j<i+s; j++) {
            curr.pb(points[j]);
            
        }
        pair<pii, int> lowest = *(min_element(all(curr), [](pair<pii, int> a, pair<pii, int> b) {
            return a.first.second < b.first.second;
        }));

        sort(all(curr), [&](pair<pii, int> a, pair<pii, int> b) {
            return atan2(a.first.second-lowest.first.second, a.first.first-lowest.first.first) < atan2(b.first.second-lowest.first.second, b.first.first-lowest.first.first);
        });

        for (pair<pii, int> point : curr) cout << point.second << " ";
        cout << endl;
    }


    return 0;
}