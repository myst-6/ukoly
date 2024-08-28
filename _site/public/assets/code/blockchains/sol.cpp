#include <iostream>
#include <cmath>
#include <vector>
#include <unordered_map>
#include <string>
#include <unordered_set>

using namespace std;

unordered_map<char, int> conversion;
vector<int> order;
int n;
int memo[(1 << 18)][18][18];

pair<int, pair<int, int>> CheckPrefix(vector<int> order) {

	int a = 26; int b = 26;
	for (int i = 0; i < order.size(); i++) {
		int j = order[i];
		if (j > b) {
			return { 1, {0, 0} };
		}
		if (j > a) {
			b = j;
		}
		else {
			a = j;
		}
	}
	return { 0, {a + 1, b + 1} };
}


int Construct(int remaining, int a, int b) {

	if (remaining == 0) {
		return 1;
	}

	int total = 0;

	if (memo[remaining][a][b] != 0) {
		return memo[remaining][a][b] - 1;
	}


	for (int element = 0; element < n; element++) {
		int next_a = a; int next_b = b;
		if ((remaining & (1 << element)) == 0) {
			continue;
		}
		if (element > b) {
			continue;
		}
		else if (element > a) {
			next_b = element;
		}
		else {
			next_a = element;
		}

		total += Construct(remaining - (1 << element), next_a, next_b);
	}

	memo[remaining][a][b] = total + 1;
	return total;
}


int main() {

	string letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (int i = 0; i < 26; i++) {
		conversion[letters[i]] = i;
	}
	cin >> n;

	int remaining = (1 << n) - 1;

	string prefix; cin >> prefix;

	for (int i = 0; i < prefix.size(); i++) {
		order.push_back(conversion[prefix[i]]);
		remaining = remaining - (1 << conversion[prefix[i]]);
	}

	pair<int, pair<int, int>> Checker = CheckPrefix(order);

	if (Checker.first == 1) {
		cout << 0;
		return 0;
	}

	int total = Construct(remaining, Checker.second.first, Checker.second.second);
	cout << total;

}