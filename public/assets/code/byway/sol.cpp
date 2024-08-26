#include <bits/stdc++.h>
using namespace std;    
#define int long long
#define pii pair<int, int>
#define vpii vector<pii>

int32_t main()
{
    ifstream cin("input.txt");
    ofstream cout("output.txt");
    
    int n;
    cin >> n;
    vector<vpii> adjlist(n);
    while (true) {
        int a, b, w;
        cin >> a >> b >> w;
        if (a==-1) break;
        a--, b--;
        adjlist[a].push_back({b, w});
        adjlist[b].push_back({a, w});
        if (a > b) swap(a, b);
    }

    vi dist_from_1(n, LLONG_MAX);
    dist_from_1[0] = 0;
    
    priority_queue<pii, vpii, greater<pii>> pq;
    pq.push({0, 0});
    while (!pq.empty()) {
        auto [d, u] = pq.top();

        pq.pop();
        for (auto [v, w] : adjlist[u]) {
            if (dist_from_1[u] + w < dist_from_1[v]) {
                dist_from_1[v] = dist_from_1[u] + w;
                pq.push({dist_from_1[v], v});
            }
        }
    }

    vi dist_from_n(n, LLONG_MAX);
    dist_from_n[n-1] = 0;

    pq.push({0, n-1});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        for (auto [v, w] : adjlist[u]) {
            if (dist_from_n[u] + w < dist_from_n[v]) {
                dist_from_n[v] = dist_from_n[u] + w;
                pq.push({dist_from_n[v], v});
            }
        }
    }

    int best_ans = LLONG_MAX;

    for (int i=0; i<n; i++) {
        for (auto [j, w] : adjlist[i]) {
            best_ans = min(best_ans, dist_from_1[i] + dist_from_n[j] + (w/2));
            best_ans = min(best_ans, dist_from_n[i] + dist_from_1[j] + (w/2));
        }
    }

    cout << best_ans << endl;

    return 0;
}