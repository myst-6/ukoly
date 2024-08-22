// author: sammyuri

#include <bits/stdc++.h>
using namespace std;

#define cin fin
#define cout fout

typedef long long ll;

const int MAXN = (1 << 18);
const int INF = -2e9;

int segtree[2 * MAXN];
ll dist[MAXN];
void init () {
    for (int i = 0; i < 2 * MAXN; i++)
        segtree[i] = INF;
}
void sett(int index, int yval) {
    index += MAXN;
    segtree[index] = yval;
    index = index / 2;
    while (index) {
        segtree[index] = max(segtree[2 * index], segtree[2 * index + 1]);
        index >>= 1;
    }
}
ll _q(int maxy, int index) {
    if (index >= MAXN)
        return dist[index - MAXN];
    // go right if possible
    if (segtree[2 * index + 1] > maxy)
        return _q(maxy, 2 * index + 1);
    // go left if possible
    if (segtree[2 * index] > maxy)
        return _q(maxy, 2 * index);
    // bad
    return (ll)(4e18);
}
ll query(int maxy) {
    return _q(maxy, 1);
}
typedef pair<int, int> point;
#define x first
#define y second

bool comp(point a, point b) {
    if (a.x + a.y == b.x + b.y)
        return a < b;
    return a.x + a.y < b.x + b.y;
}
bool comp2(pair<point, int> a, pair<point, int> b) {
    if (a.first.x + a.first.y != b.first.x + b.first.y)
        return comp(a.first, b.first);
    return a.second < b.second;
}

int main() {
    ifstream fin ("input.txt");
    ofstream fout ("output.txt");
    vector<pair<int, int>> points;
    init();
    int n; cin >> n;
    for (int i = 0; i < n; i++) {
        int a, b; cin >> a >> b;
        points.push_back(make_pair(a, b));
    }
    // sort according to x value
    sort(points.begin(), points.end());
    reverse(points.begin(), points.end());
    // sort according to distance
    vector<pair<point, int>> ind;
    for (int i = 0; i < n; i++)
        ind.push_back({points[i], i});
    sort(ind.begin(), ind.end(), comp2);
    reverse(ind.begin(), ind.end());
    for (int i = 0; i < n; i++)
        dist[i] = ind[i].first.x + ind[i].first.y;
    map<point, int> ind_val;
    for (int i = 0; i < n; i++)
        ind_val[ind[i].first] = i;
    // sweep from left to right
    ll total = 0;
    for (int i = 0; i < n; i++) {
        // add query distance
        ll curdist = query(points[i].y);
        // cout << curdist << endl;
        if (curdist != (ll)(4e18))
            total += curdist - (points[i].x + points[i].y);
        sett(ind_val[points[i]], points[i].y);
    }
    cout << total << endl;
    return 0;
}