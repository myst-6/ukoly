#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define int long long
#define vi vector<int>

int output = 0;
void dfs(vi scenes_to_be_done, vi completed_scenes) {
    if (all_of(scenes_to_be_done.begin(), scenes_to_be_done.end(), [](int i) {return i==0;})) output++;
    else {
        if (scenes_to_be_done[0] != 0) {
            vi new_state = scenes_to_be_done;
            vi new_state2 = completed_scenes;
            new_state[0]--;
            new_state2[0]++;
            dfs(new_state, new_state2);
        }
        for (int i=0; i<scenes_to_be_done.size()-1; i++) {
            if (scenes_to_be_done[i + 1] > 0 and completed_scenes[i] > completed_scenes[i+1]) {
                vi new_state = scenes_to_be_done;
                vi new_state2 = completed_scenes;
                new_state[i+1]--;
                new_state2[i+1]++;
                dfs(new_state, new_state2);
            }
        }
    }
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vi scenes(n);
    for (int i=0; i<n; i++) {
        cin >> scenes[i];
    }
    dfs(scenes, vi(n, 0));
    cout << output << endl;

    return 0;
}