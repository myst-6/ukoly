# Solution Author: Shubham Kumar

from collections import Counter
from itertools import combinations_with_replacement as cwr


n = int(input())  # number of dice faces
input_dice_1 = sorted(map(int, input().split()))  # values of dice 1
input_dice_2 = sorted(map(int, input().split()))  # values of dice 2
output_dice_2 = [0]*n  # the second output dice

original_combinations = Counter(input_dice_1[i] + input_dice_2[j] for i in range(n) for j in range(n))
# create a counter of all possible combinations of dice 1 and dice 2

def check(dice_to_check):
    all_combinations = original_combinations.copy()  # create a copy of original combinations
    
    for y in range(n):
        smallest_combination = min(all_combinations)  # get the smallest combination
        all_combinations[smallest_combination] -= 1  # decrease the count of smallest combination
        if all_combinations[smallest_combination] == 0:
            del all_combinations[smallest_combination]  # remove the smallest combination if count becomes 0
        output_dice_2[y] = smallest_combination - dice_to_check[0]  # calculate the yth face on the second output dice
        if output_dice_2[y] < 1:
            return False  # if a face's value is less than 1, it's invalid
        for i in range(1, n):
            z = dice_to_check[i] + output_dice_2[y] # check that all combinations of the yth face and the first output dice are valid
            if z in all_combinations: 
                all_combinations[z] -= 1
                if all_combinations[z] == 0:
                    del all_combinations[z]
            else:
                return False  # if combination is not present in all_combinations, it's invalid
    if output_dice_2 != input_dice_2 and output_dice_2 != input_dice_1:
        return True  # if modified dice 2 is different from input dice 1 and dice 2, it's valid
    return False

for dice_to_check in cwr(range(1, 9), n): # iterate over all possible first output dice, to check if their second is valid
    if check(dice_to_check):
        print(*dice_to_check)  # print the output dice 1
        print(*output_dice_2)  # print the output dice 2
        break
else:
    print("Impossible")  # if no valid combination found, print "Impossible"
