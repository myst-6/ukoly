from math import ceil

interest, repayment = map(int, input().split())
interest = interest / 100 + 1
repayment = repayment / 100

debt = 10000
ans = 0
while debt > 0:
    debt = ceil(round(debt * interest, 2))
    repaid = min(max(ceil(round(debt * repayment, 2)), 5000), debt)
    debt -= repaid
    ans += repaid
print("{:.2f}".format(ans/100))
