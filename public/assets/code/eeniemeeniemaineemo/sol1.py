# Solution Author: Adwaya Gupta
n = int(input())
words = int(input())

people = list(range(n))
point = 0
while len(people) > 1:
    point = (point + words - 1) % len(people)
    people.pop(point)
print(people[0] + 1)
