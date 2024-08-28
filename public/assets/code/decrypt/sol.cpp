#include <iostream>
#include <string>

using namespace std;

int toNum(char ch) {
    return ((ch - 'A' + 1) % 26);
}

char toChar(int num) {
    if (num == 0) {
        return 'Z';
    }
    return ('A' - 1 + num);
}

int main() {
    string s;
    cin >> s;

    char prev = -1;
    string out = "";

    for (char charIn : s) {
        if (prev == -1) {
            out += charIn;
        } else {
            out += toChar((toNum(charIn) - toNum(prev) + 26) % 26);
        }
        prev = charIn;
    }

    cout << out << endl;

    return 0;
}
