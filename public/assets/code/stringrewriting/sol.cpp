#include <bits/stdc++.h> 
using namespace std; 

#define int long long 

void solve() {
	string s; 
	int steps, pos; 
	cin >> s >> steps >> pos; 

	vector<int> pow2(32,1LL); 
	for (int i=1; i<32; i++) {
		pow2[i] = 2 * pow2[i-1]; 
	}

	vector<int> fib={1,1}; 
	while (fib.back() < pow2[31]) {
		fib.push_back(fib.back() + fib[ssize(fib)-2]); 
	}

	map<array<int,3>, vector<int>> dp; 

	function<vector<int>(char,int,int)> Find = [&] (char c, int steps, int pos) {
		if (dp.count({c-'A',steps,pos})) {
			return dp[{c-'A',steps,pos}]; 
		}
		if (pos <= 0) {
			return vector<int>{0,0,0,0,0}; 
		}
		if (c == 'A') {
			if (steps == 0) return vector<int>{1,0,0,0,0}; 
			if (steps == 1) return vector<int>{0,1,0,0,0}; 
			if (pos >= fib[steps-2]) {
				vector<int> a = Find('A', steps-2, fib[steps-2]); 
				vector<int> b = Find('A', steps-1, pos - fib[steps-2]); 
				for (int i=0; i<5; i++) {
					a[i] += b[i]; 
				}
				return dp[{c-'A',steps,pos}]=a; 
			} else {
				return Find('A', steps-2, pos); 
			}
		}
		if (c == 'B') {
			return Find('A', steps+1, pos); 
		}
		if (c == 'C') {
			if (steps == 0) return vector<int>{0,0,1,0,0}; 
			int len = pow2[steps]; 
			if (pos >= len/2) {
				vector<int> a = Find('C', steps-1, len/2); 
				vector<int> b = Find('D', steps-1, pos - len/2); 
				for (int i=0; i<5; i++) {
					a[i] += b[i]; 
				}
				return dp[{c-'A',steps,pos}]=a; 
			} else {
				return Find('C', steps-1, pos); 
			}
		}
		if (c == 'D') {
			if (steps == 0) return vector<int>{0,0,0,1,0}; 
			int len = pow2[steps]; 
			if (pos >= len/2) {
				vector<int> a = Find('D', steps-1, len/2); 
				pos -= len/2; 
				vector<int> b = Find('C', steps-1, pos); 
				for (int i=0; i<5; i++) {
					a[i] += b[i]; 
				}
				return dp[{c-'A',steps,pos}]=a; 
			} else {
				return Find('D', steps-1, pos); 
			}
		}
		if (c == 'E') {
			return vector<int>{0,0,0,0,min(pos, pow2[steps])}; 
		}
	}; 

	int len = 0; 
	vector<int> ans(5,0); 
	for (char c : s) {
		vector<int> add = Find(c, steps, pos - len); 
		for (int i=0; i<5; i++) {
			ans[i] += add[i]; 
		}
		if (c == 'A') {
			len += fib[steps]; 
		}
		if (c == 'B') {
			len += fib[steps+1]; 
		}
		if (c == 'C' || c == 'D' || c == 'E') {
			len += pow2[steps]; 
		}
	}
	for (int i : ans) {
		cout << i << ' '; 
	}
	cout << '\n'; 
}

int32_t main() {
	ios_base::sync_with_stdio(false); 
	cin.tie(nullptr); 

	solve(); 

	return 0; 
}
