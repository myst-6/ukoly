# Solution Author: Shubham Kumar

from collections import Counter
from itertools import combinations_with_replacement as cwr


n = int(input())  # number of die faces
input_die_1 = sorted(map(int, input().split()))  # values of die 1
input_die_2 = sorted(map(int, input().split()))  # values of die 2
output_die_2 = [0]*n  # the second output die

original_combinations = Counter(input_die_1[i] + input_die_2[j] for i in range(n) for j in range(n))
# create a counter of all possible combinations of die 1 and die 2

def check(die_to_check):
    all_combinations = original_combinations.copy()  # create a copy of original combinations
    
    for y in range(n):
        smallest_combination = min(all_combinations)  # get the smallest combination
        all_combinations[smallest_combination] -= 1  # decrease the count of smallest combination
        if all_combinations[smallest_combination] == 0:
            del all_combinations[smallest_combination]  # remove the smallest combination if count becomes 0
        output_die_2[y] = smallest_combination - die_to_check[0]  # calculate the yth face on the second output die
        if output_die_2[y] < 1:
            return False  # if a face's value is less than 1, it's invalid
        for i in range(1, n):
            z = die_to_check[i] + output_die_2[y] # check that all combinations of the yth face and the first output die are valid
            if z in all_combinations: 
                all_combinations[z] -= 1
                if all_combinations[z] == 0:
                    del all_combinations[z]
            else:
                return False  # if combination is not present in all_combinations, it's invalid
    if output_die_2 != input_die_2 and output_die_2 != input_die_1:
        return True  # if modified die 2 is different from input die 1 and die 2, it's valid
    return False

for die_to_check in cwr(range(1, 9), n): # iterate over all possible first output die, to check if their second is valid
    if check(die_to_check):
        print(*die_to_check)
        print(*output_die_2)
        break
else:
    print("Impossible")
