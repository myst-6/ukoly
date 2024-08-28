#include <bits/stdc++.h>
using namespace std; 

int main() {
	string s; 
	int n; 
	cin >> s >> n; 

	auto roman_numeral = [&] (int x) {
		vector<string> ones = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"}; 
		vector<string> tens = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"}; 
		vector<string> hundreds = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "DM"}; 
		return hundreds[(x%1000)/100] + tens[(x%100)/10] + ones[x%10];  
	}; 

	while (n--) {
		s += '.'; 
		string t = ""; 
		char last = ' '; 
		int len = 0; 
		for (int i=0; i<ssize(s); i++) {
			if (last != s[i]) {
				if (last != ' ') {
					t += roman_numeral(len) + last; 
				}
				last = s[i]; 
				len = 1; 
			} else {
				++len; 
			}
		}
		s = t; 
	}
	cout << count(s.begin(), s.end(), 'I') << ' ' << count(s.begin(), s.end(), 'V') << '\n'; 

	return 0; 
}