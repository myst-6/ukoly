key = ["no" , "pa" , "re" , "ci", "vo", "mu", "xa", "ze" , "bi" , "so"]

lojban = input()
ans = ""

for i in range(0, len(lojban), 2):
    f = lojban[i]+lojban[i+1]
    ans += str(key.index(f))
    
print(ans)
