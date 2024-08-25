//solution author: yuvan raja
#include <fstream>
#include <vector>
using namespace std;
using vvi = vector<vector<int>>;

pair<int,int> getHeight(vvi& adjList, int start, int curHeight, vector<bool>& visited){
    int subHeight = -1;
    int bestHeight = curHeight;
    int bestDeepest = start;
    for(int neighbour: adjList[start]){
        if(!visited[neighbour]){
            visited[neighbour] = true;
            pair<int, int> thisPath = getHeight(adjList, neighbour, curHeight + 1, visited);
            if(thisPath.first > bestHeight){
                bestHeight = thisPath.first;
                bestDeepest = thisPath.second;
            }
        }
    }
    return make_pair(bestHeight, bestDeepest);
}
int main(){
    ifstream fin("input.txt");
    ofstream fout("output.txt");
    int v,x,y;
    fin >> v;
    
    vvi adjList(v,vector<int>{});
    for(int t = 0; t<v-1; ++t){
        fin >>x>>y;
        adjList[x-1].push_back(y-1);
        adjList[y-1].push_back(x-1);
        
    }
    int diameter = -1;
    
    vector<bool> visited(v, false);
    visited[0] = true;
    pair<int,int> trav1 = getHeight(adjList, 0, 0, visited);
    vector<bool> visited2(v, false);
    visited2[trav1.second] = true;
    pair<int,int> trav2 = getHeight(adjList, trav1.second, 0, visited2);
    diameter = trav2.first;
    
    int edges = v-1;
    fout << 3*(2*edges - diameter) << endl;
    return 0;
}
