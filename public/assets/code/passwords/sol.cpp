// Solution Author: Shubham Kumar

#include <iostream>
#include <string>
using namespace std;

int main() {
    string s; cin >> s;
    int n = s.length();

    for (int len = 1; len <=5; ++len) { // maximum n = 10, so maximum check is first 5 against last 5
        for (int l = 0; l <= n - 2*len; ++l) {
            if (s.substr(l,len)==s.substr(l+len,len)) {
                cout << "Rejected\n";
                return 0; // early return
            }
        }
    }
    cout << "Accepted\n";
    return 0;
}
