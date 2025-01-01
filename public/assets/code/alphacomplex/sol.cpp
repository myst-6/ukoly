#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

vector<vector<char>> connections;
vector<vector<int>> visited;
vector<int> rVisited;
string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
int location = 0, nextlocation = 0;

// Function to add a connection between two rooms
void addConnection(char r1, char r2) {
    connections[r1 - 'A'].push_back(r2);
    connections[r2 - 'A'].push_back(r1);
}

// Function to make connections based on the plan
void makeConnections(string plan) {
    string chosen = "";
    
    while (plan.size()) {
        for (char room : alphabet) {
            if (plan.find(room) == string::npos && chosen.find(room) == string::npos) {
                addConnection(room, plan[0]);
                plan = plan.substr(1); // Remove the first character from the plan
                chosen += room;
                break;
            }
        }
    }

    vector<char> remainder;
    for (char room : alphabet) {
        if (chosen.find(room) == string::npos) {
            remainder.push_back(room);
        }
    }
    addConnection(remainder[0], remainder[1]);
}

// Function to simulate the movement
void move() {
    if (rVisited[location] == 1) {
        nextlocation = connections[location][0] - 'A';
    } else {
        for (int j = 0; j < connections[location].size(); j++) {
            int possExit = connections[location][j] - 'A';
            if (visited[location][possExit] == 1) {
                if (j == connections[location].size() - 1) {
                    nextlocation = possExit;
                } else {
                    nextlocation = connections[location][j + 1] - 'A';
                }
                break;
            }
        }
    }

    // Toggle visited status and room visitation
    rVisited[nextlocation] ^= 1;
    visited[location][nextlocation] ^= 1;
    location = nextlocation;
}

int main() {
    string plan;
    int p, q;
    cin >> plan >> p >> q;

    int n = plan.size() + 2;
    connections.resize(n);
    visited.resize(n, vector<int>(n, 0));
    rVisited.resize(n, 0);
    rVisited[0] = 1; // Starting room is visited

    alphabet = alphabet.substr(0, n); // Limit alphabet to n characters

    // Build the connections based on the given plan
    makeConnections(plan);

    // Sort the connections for each room
    for (auto &item : connections) {
        sort(item.begin(), item.end());
        cout << string(item.begin(), item.end()) << endl;
    }

    // Move p times
    for (int i = 0; i < p; i++) {
        move();
    }
    cout << alphabet[location];

    // Move additional (q - p) times
    for (int i = 0; i < q - p; i++) {
        move();
    }
    cout << alphabet[location] << endl;

    return 0;
}
