# Solution Author: Shubham Kumar

def sol():
  s = input('Password: ')
  n = len(s)
  for x in range(1,6):
    for l in range(n-2*x+1):
      if s[l:l+x]==s[l+x:l+2*x]:
        return False
  return True
print("RAecjceecptteedd"[sol()::2])
