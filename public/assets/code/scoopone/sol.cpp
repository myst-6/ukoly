//solution author: yuvan raja
#include <iostream>
#include <vector>
using namespace std;
using vvi = vector<vector<int>>;

int getHeight(vvi &adjList, int start, int curHeight, vector<bool> &visited)
{
    int subHeight = -1;
    int totalHeight = curHeight;
    for (int neighbour : adjList[start])
    {
        if (!visited[neighbour])
        {
            visited[neighbour] = true;
            subHeight = getHeight(adjList, neighbour, curHeight + 1, visited);
            if (subHeight > totalHeight)
            {
                totalHeight = subHeight;
            }
        }
    }
    return totalHeight;
}
int main()
{
    int v, i, x, y;
    cin >> v;
    cin >> i;
    i = i - 1;
    vvi adjList(v, vector<int>{});
    for (int t = 0; t < v - 1; ++t)
    {
        cin >> x >> y;
        adjList[x - 1].push_back(y - 1);
        adjList[y - 1].push_back(x - 1);
    }
    vector<bool> visited(v, false);
    visited[i] = true;
    int height = getHeight(adjList, i, 0, visited);
    int edges = v - 1;
    cout << 3 * (2 * edges - height) << endl;
    return 0;
}
