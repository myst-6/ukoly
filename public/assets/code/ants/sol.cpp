// Solution Author: Shubham Kumar

#include <bits/stdc++.h>
#include <iostream>
using namespace std;
#define width 11
constexpr array<pair<short,short>,4> dirs = {{{0,1},{1,0},{0,-1},{-1,0}}}; // all possible directions, starting with up, and going CW

vector<vector<bool>> board(width, vector<bool>(width, true));

class Ant{ // this class is not necessary, all of this code could be written sequentially, but taking it out of the mainloop makes it only 10 lines long!
    private:
    short x,y,direction;
    bool exists = true; // all ants begin existing
    public:
    void initalise(){
        char c;
        cin >> x >> y >> c;
        x--; y--; // convert to 0 indexing
        direction = "TRBL"s.find(c); // convert char to index
    }
    void move(){
        if (!exists) return; // early return if ant doesn't exist
        auto [dx,dy] = dirs[direction];
        x += dx;
        y += dy;
        if (!(0<=x && x<width && 0<=y && y<width)){ // another early return if ant falls off on this turn
            exists = false;
            return;
        }
        direction = (direction+(board[x][y] ? 1 : -1)+4)%4; // go forwards(CW) through dirs if on white else go ACW and mod 4 to keep it cyclic
        board[x][y] = !board[x][y]; // toggle state of the square
    }
    void out(){
        if (!exists) cout << "Removed\n";
        else cout << x+1 << ' ' << y+1 << ' ' << "TRBL"[direction] << '\n'; // convert back to one indexing, and index back to corresponding char
    }
};

int main(){
    Ant ants[2]; // init ants
    ants[0].initalise();
    ants[1].initalise();

    // mainloop
    int n;
    cin >> n;
    while (n!=-1){ // terminates at -1
        while (n--){ // move both ants n times
            ants[0].move();
            ants[1].move();
        }
        for (int y = width-1; y >= 0; y--){ // the highest y value is printed first, so the for loop is reversed
            for (int x = 0; x < width; x++){ // print each row
                cout << "*."[board[x][y]]; // '*.'[bool] selects '.' for True (white), or '*' for black squares
            }
            cout << '\n';
        }
        ants[0].out(); // output positions of both ants
        ants[1].out();
        cin >> n; // get new n and repeat until -1
    }
    return 0;
}
