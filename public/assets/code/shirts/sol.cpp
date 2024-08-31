#include <iostream>
#include <queue>
#include <set>
#include <string>
#include <functional>

using namespace std;

int main() {
    vector<function<string(string)>> operations = {
        [](string x) { return x.substr(1, 3) + x[0] + x.substr(4); },
        [](string x) { return x.substr(0, 3) + x[6] + x.substr(3, 3); },
        [](string x) { return x[3] + x.substr(0, 3) + x.substr(4); },
        [](string x) { return x.substr(0, 3) + x.substr(4) + x[3]; }
    };

    string a;
    cout << "Please enter a sequence: ";
    cin >> a;

    set<string> seen;
    queue<pair<int, string>> q;
    q.push({0, a});

    while (!q.empty()) {
        int depth = q.front().first;
        string value = q.front().second;
        q.pop();

        if (value == "1234567") {
            cout << depth << endl;
            return 0;
        }

        if (seen.find(value) != seen.end()) {
            continue;
        }

        seen.insert(value);

        for (const auto& op : operations) {
            q.push({depth + 1, op(value)});
        }
    }

    return 0;
}
