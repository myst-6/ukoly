#include <bits/stdc++.h>

using namespace std;

int bank1, bank2;

class Pebble {
public:
    int x, y, t;
    Pebble(int x, int y, int t) {
        this->x = x;
        this->y = y;
        this->t = t;
    }

    int effect_on_cell(int x, int y, int t) {
        if (abs(x - this->x) + abs(y - this->y) == t - this->t
            || this->x < x && x < bank1
                && x - this->x + 2 * (bank1 - x) + abs(y - this->y) == t - this->t
            || bank1 < this->x && this->x < x && x < bank2
                && (t - this->t) - (x - this->x + 2 * (bank2 - x) + abs(y - this->y)) >= 0
                && ((t - this->t) - (x - this->x + 2 * (bank2 - x) + abs(y - this->y))) % (bank2 - bank1) == 0
            || bank1 < x && x < this->x && this->x < bank2
                && (t - this->t) - (this->x - x + 2 * (x - bank1) + abs(y - this->y)) >= 0
                && ((t - this->t) - (this->x - x + 2 * (x - bank1) + abs(y - this->y))) % (bank2 - bank1) == 0
            || bank2 < x < this->x && this->x
                && this->x - x + 2 * (x - bank2) + abs(y - this->y) == t - this->t) {
                    return 1;
        }
        if (abs(x - this->x) + abs(y - this->y) == t - this->t - 2
            || this->x < x && x < bank1
                && x - this->x + 2 * (bank1 - x) + abs(y - this->y) == t - this->t - 2
            || bank1 < this->x && this->x < x && x < bank2
                && (t - this->t - 2) - (x - this->x + 2 * (bank2 - x) + abs(y - this->y)) >= 0
                && ((t - this->t - 2) - (x - this->x + 2 * (bank2 - x) + abs(y - this->y))) % (bank2 - bank1) == 0
            || bank1 < x && x < this->x && this->x < bank2
                && (t - this->t - 2) - (this->x - x + 2 * (x - bank1) + abs(y - this->y)) >= 0
                && ((t - this->t - 2) - (this->x - x + 2 * (x - bank1) + abs(y - this->y))) % (bank2 - bank1) == 0
            || bank2 < x < this->x && this->x
                && this->x - x + 2 * (x - bank2) + abs(y - this->y) == t - this->t - 2) {
                    return -1;
        }
        return 0;
    }
};

int main() {
    int p;
    cin >> p;

    vector<Pebble> pebbles;
    for (int i = 0; i < p; ++i) {
        int x, y, t;
        cin >> x >> y >> t;
        pebbles.push_back(Pebble(x, y, t));
    }

    cin >> bank1 >> bank2;
    if (bank1 > bank2) {
        swap(bank1, bank2);
    }

    int r;
    cin >> r;
    for (int y = 4; y >= -4; --y) {
        for (int x = -4; x <= 4; ++x) {
            if (x == bank1 || x == bank2) {
                cout << "X";
            }
            else {
                int depth = 0;
                for (Pebble pebble: pebbles) {
                    depth += pebble.effect_on_cell(x, y, r);
                }
                if (depth < 0) {
                    cout << "o";
                }
                else if (depth == 0) {
                    cout << "-";
                }
                else {
                    cout << "*";
                }
            }
        }
        cout << '\n';
    }
    return 0;
}