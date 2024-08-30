//Solution Author: yuvan raja
#include <iostream>
#include <vector>
#include <string>

using namespace std;

const string ALPHABET = "ABCDEFGHIJKLMNOPQRSTU";
vector<vector<long long>> dp;
int p, q, r;

long long f(int lettersLeft, int prevCount) {
    if (prevCount > q) {
        return 0;
    }
    if (lettersLeft == 0) {
        return 1;
    }
    if (dp[lettersLeft][prevCount] != -1) {
        return dp[lettersLeft][prevCount];
    }

    long long numBranch = 0;
    if (prevCount != q) {
        numBranch = f(lettersLeft - 1, prevCount + 1);
    }

    numBranch += (p - 1) * f(lettersLeft - 1, 1);
    dp[lettersLeft][prevCount] = numBranch;
    return numBranch;
}

void walkTree(long long n) {
    long long curr = 0;
    string stri = ".";
    int lettersLeft = r - 1;
    int prevCount = 0;
    
    while (lettersLeft >= 0) {
        bool done = false;
        while (!done) {
            for (char letter : ALPHABET.substr(0, p)) {
                int nextprevCount = (letter == stri.back()) ? prevCount + 1 : 1;
                curr += f(lettersLeft, nextprevCount);
                if (curr >= n) {
                    curr -= f(lettersLeft, nextprevCount);
                    prevCount = nextprevCount;
                    done = true;
                    stri += letter;
                    break;
                }
            }
        }
        lettersLeft--;
    }
    cout << stri.substr(1) << endl;
}

int main() {
    cin >> p >> q >> r;
    long long n;
    cin >> n;

    dp = vector<vector<long long>>(r + 1, vector<long long>(q + 1, -1));
    walkTree(n);

    return 0;
}

