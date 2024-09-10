#include <bits/stdc++.h>
using namespace std;

struct Stop {
    char leftSwitch;
    char rightSwitch;
    char straightSwitch;
    char currSwitch;
    bool lazy;
    Stop() { /* default constructor, needed for using Stop in a map */ };
    Stop(char leftSwitch, char rightSwitch, char straightSwitch, bool lazy) {
        this -> leftSwitch = leftSwitch;
        this -> rightSwitch = rightSwitch;
        this -> straightSwitch = straightSwitch;
        this -> lazy = lazy;
        currSwitch = leftSwitch;
    } 
    char nxt(char from) {
        if (lazy) {
            if (from == straightSwitch) {
                return currSwitch;
            } else {
                currSwitch = from;
                return straightSwitch;
            }
        } else {
            if (from == straightSwitch) {
                char tmpSwitch = currSwitch;
                if (currSwitch == leftSwitch)
                    currSwitch = rightSwitch;
                else
                    currSwitch = leftSwitch;
                return tmpSwitch;
            } else {
                return straightSwitch;
            }
        }
    }
};

int main() {
    string flipFlop;
    cin >> flipFlop;
    string start;
    cin >> start;
    int n;
    cin >> n;
    //constructing layout
    set<char> isFlipFlop;
    for (char a : flipFlop)
        isFlipFlop.insert(a);
    string layer0 = "ABCD";
    string layer1 = "EFGHIJKL";
    string layer2 = "MNOPQRST";
    string layer3 = "UVWX";
    map<char, Stop> board;
    board['A'] = Stop('E', 'F', 'D', !isFlipFlop.count('A'));
    board['B'] = Stop('G', 'H', 'C', !isFlipFlop.count('B'));
    board['C'] = Stop('I', 'J', 'B', !isFlipFlop.count('C'));
    board['D'] = Stop('K', 'L', 'A', !isFlipFlop.count('D'));
    for (int i = 0; i < 8; i++) {
        board[layer1[i]] = Stop(layer2[i], layer2[(i + 1) % 8], layer0[i / 2], !isFlipFlop.count(layer1[i]));
        board[layer2[i]] = Stop(layer1[(i + 7) % 8], layer1[i], layer3[i / 2], !isFlipFlop.count(layer2[i]));
    }
    board['U'] = Stop('M', 'N', 'V', !isFlipFlop.count('U'));
    board['V'] = Stop('O', 'P', 'U', !isFlipFlop.count('V'));
    board['W'] = Stop('Q', 'R', 'X', !isFlipFlop.count('W'));
    board['X'] = Stop('S', 'T', 'W', !isFlipFlop.count('X'));
    char curr = start[0], to = start[1];
    //run the train
    for (int i = 0; i < n; i++) {
        char tmp = board[to].nxt(curr);
        curr = to, to = tmp;
    }
    cout << curr << to << '\n';
    return 0;
} 