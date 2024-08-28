# Solution Author: Adwaya Gupta
choices = input()

promenade = [1, 1]
left = [1, 0]
right = [0, 1]

for c in choices:
    if c == "L":
        left = promenade
    else:
        right = promenade
    promenade = [left[0] + right[0], left[1] + right[1]]
    
print(promenade[0], '/', promenade[1])
