c1, c2 = map(int, input().split())
time1 = time2 = 0
done = False
while time1 != time2 or not done:
    done = True
    time1 = (time1+c1+60)%1440
    time2 = (time2+c2+60)%1440
print(f'{time1//60:02}:{time1%60:02}')
