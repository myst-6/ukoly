//solution author: yuvan raja
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <utility>
#include <forward_list>
using namespace std;

int main(){
    int n,x,y;
    cin >> n;
    vector<vector<bool>> info(n, vector<bool>(n, false));
    for(int i = 0; i<n; ++i){
        for(int j = 0; j<i; ++j){
            cin >> x >> y;
            info[x-1][y-1] = true; //x-1 beats y-1
        }
    }
    forward_list<int> l{0};
    int fr = 0;
    queue<int> q{};
    for(int i = 1; i<n; ++i){
        q.push(i);
    }
    int curr;
    for(int i = 1; i<n; ++i){
        curr = q.front();
        q.pop();
        auto It = l.begin();
        auto It2 = l.begin();
        if(i!=1){
            ++It2;
        }
        if(info[*It][curr]){
            l.push_front(curr);
            continue;
        }
        for(int j = 0; j<i; ++j){
            //consider inserting after j
            //It points to jth index
            if(j==i-1){
                l.insert_after(It,curr);
                break;
            }
            if(info[curr][*It] && info[*It2][curr]){
                l.insert_after(It,curr);
                break;
            }
            ++It, ++It2;
        }
    }
    for(auto It = l.begin(); It!=l.end(); ++It){
        cout << (*It) + 1 << ' ';
    }
    return 0;
}
