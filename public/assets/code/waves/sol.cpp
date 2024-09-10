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
        int result = 0;
        int elapsed_time = t - this->t - abs(y - this->y);

        if (elapsed_time < 0) {
            return 0;
        }
        if (min(x, this->x) < bank1 && bank1 < max(x, this->x) || min(x, this->x) < bank2 && bank2 < max(x, this->x)) {
            return 0;
        }
        else if (x == this->x && elapsed_time == 0) {
            return 1;
        }

        // right wave
        if (this->x <= x < bank1 && elapsed_time == x - this->x) {  // pebble -> wave -> left bank, no reflections have happened yet
            result += 1;
        }
        else if (max(this->x, x) < bank1 && elapsed_time == (bank1 - this->x - 1) + (bank1 - x)) {  // the pebble and the wave are to the left of the left bank, the wave has been reflected once
            result += 1;
        }
        else if (bank2 < this->x <= x && elapsed_time == x - this->x) {  // right bank -> pebble -> wave
            result += 1;
        }
        else if (bank1 < min(x, this->x) && max(x, this->x) < bank2) {  // the pebble and the wave are in between the banks
            elapsed_time += this->x - bank1;
            if (elapsed_time >= (x - bank1) && (elapsed_time - (x - bank1)) % ((bank2 - bank1 - 1) * 2) == 0) {  // an even number of reflections
                result += 1;
            }
            else if (elapsed_time >= (bank2 - x) + (bank2 - bank1 - 1) && (elapsed_time - (bank2 - x) - (bank2 - bank1 - 1)) % ((bank2 - bank1 - 1) * 2) == 0) {  // an odd number of reflections
                result += 1;
            }
            elapsed_time -= (this->x - bank1);
        }

        // left wave
        if (x <= this->x < bank1 && elapsed_time == this->x - x) {  // wave -> pebble -> left bank
            result += 1;
        }
        else if (bank2 < x <= this->x && elapsed_time == this->x - x) {  // right bank -> wave -> pebble, no reflections have happened yet
            result += 1;
        }
        else if (bank2 < min(x, this->x) && elapsed_time == (this->x - bank2 - 1) + (x - bank2)) {  // the pebble and the wave are to the right of the right bank, the wave has been reflected once
            result += 1;
        }
        else if (bank1 < min(x, this->x) && max(x, this->x) < bank2) {  // the pebble and the wave are in between the banks
            elapsed_time += bank2 - this->x;
            if (elapsed_time >= (bank2 - x) && (elapsed_time - (bank2 - x)) % ((bank2 - bank1 - 1) * 2) == 0) {  // an even number of reflections
                result += 1;
            }
            else if (elapsed_time >= (x - bank1) + (bank2 - bank1 - 1) && (elapsed_time - (x - bank1) - (bank2 - bank1 - 1)) % ((bank2 - bank1 - 1) * 2) == 0) {  // an odd number of reflections
                result += 1;
            }
        }
        
        return result;
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
                    depth -= pebble.effect_on_cell(x, y, r - 2);
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