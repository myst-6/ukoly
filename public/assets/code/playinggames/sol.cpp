// Solution Author: Shubham Kumar

#include <bits/stdc++.h>
using namespace std;
#define all(x) x.begin(),x.end()
#define l(x) for (dice_to_check[x]=(x?dice_to_check[x-1]:1);dice_to_check[x]<=point[x];++dice_to_check[x])

int n;
vector<int> output_dice_1,output_dice_2,input_dice_1,input_dice_2;

bool check(vector<int> dice_to_check, multiset<int>all_combinations){
    for (int y = 0; y < n; ++y){
        int smallest_combination = *all_combinations.begin(); // get the smallest combination (sets are ordered)
        all_combinations.erase(all_combinations.begin()); // remove it from the set
        output_dice_2[y] = smallest_combination-dice_to_check[0]; // calculate the first value of the second dice, by subtracting the first value of the first dice from the smallest combination
        if (output_dice_2[y] < 1) return false; // if it's less than 1, it's invalid
        for (int i=1;i<n;++i){ // check the rest of the values on the dice to check give combinations which are in the conbinations desired
            int z = dice_to_check[i]+output_dice_2[y];
            auto it = all_combinations.find(z);
            if (it == all_combinations.end()) return false;
            all_combinations.erase(it);
        }
    }
    if (output_dice_2 != input_dice_1 and output_dice_2 != input_dice_2) { // if the dice is the same as the input, it is not acceptable
        output_dice_1=dice_to_check;
        return true;
    }
    return false;
}

int main() {
    cin >> n;
    output_dice_2.resize(n); output_dice_1.resize(n);
    input_dice_1.resize(n); input_dice_2.resize(n);
    for (int i=0;i<n;++i) cin>>input_dice_1[i];
    for (int i=0;i<n;++i) cin>>input_dice_2[i];
    sort(all(input_dice_1)); sort(all(input_dice_2));

    multiset<int> original_combinations; // iterate through to create the set of all possible combinations
    for (int i=0;i<n;++i)
        for (int j=0;j<n;++j)
            original_combinations.insert(input_dice_1[i]+input_dice_2[j]);

    vector<int> point(8,8); // maximum value of the ith dice face (there is no way to make a variable number of iterations), so what i do is always do 8, but for n less than 8, i set the upper bound to the first 8-n elemts to 1 to only make one iteration
    for (int i=0;i<8-n;++i) point[i] = 1;
    vector<int> dice_to_check(8);

    l(0) l(1) l(2) l(3) l(4) l(5) l(6) l(7) // these macros are used to generate all potential dice, see the python for simpler version
        if (check(vector<int>(dice_to_check.end()-n,dice_to_check.end()),original_combinations))
            goto win;

    cout << "Impossible\n";
    return 0;

    win: // label for the goto statement
    for (auto x: output_dice_1) cout << x <<' ';
    cout <<'\n';
    for (auto x: output_dice_2) cout << x<<' ';
    cout <<'\n';
    return 0;
}
