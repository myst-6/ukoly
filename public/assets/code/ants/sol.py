# Solution Author: Shubham Kumar

width = 11

dirs = ((0,1),(1,0),(0,-1),(-1,0)) # all possible directions, starting with up, and going CW

board = [[True]*width for _ in range(width)] # initalise board to all white (True is white)

class Ant: # this class is not necessary, all of this code could be written sequentially, but taking it out of the mainloop makes it only 10 lines long!
    def __init__(self):
        x,y,direction = input().split() # split the input line into 3 variables
        self.x = int(x)-1 # turn one indexed input into 0 indexed, also converting a string to int
        self.y = int(y)-1
        self.direction = 'TRBL'.find(direction) # converts the input direction T, R, B or L to the index of the corresponding direction of dirs
        self.exists = True # all ants begin existing
    def move(self):
        if not self.exists: return # early return if ant doesn't exist
        dx,dy = dirs[self.direction]
        self.x += dx
        self.y += dy
        if not (0<=self.x<width and 0<=self.y<width): # another early return if ant falls off on this turn
            self.exists = False
            return
        self.direction = (self.direction+(1 if board[self.x][self.y] else -1))%4 # go forwards(CW) through dirs if on white else go ACW and mod 4 to keep it cyclic
        board[self.x][self.y] = not board[self.x][self.y] # toggle state of the square
    def out(self):
        if not self.exists: print("Removed")
        else: print(self.x+1,self.y+1,'TRBL'[self.direction]) # convert back to one indexing, and index back to corresponding char

ants = Ant(),Ant() # init ants

# mainloop
n = int(input())
while n!=-1: # terminates at -1
    for i in range(n): # move both ants n times
        ants[0].move()
        ants[1].move()
    for y in range(width-1,-1,-1): # the highest y value is printed first, so the for loop is reversed
        print(*('*.'[board[x][y]] for x in range(width)), sep='') # '*.'[bool] selects '.' for True (white), or '*' for black squares. *() splits the generator expression into multiple arguments into the print() function, and sep='' removes the default whitespace between arguments
    ants[0].out() # output positions of both ants
    ants[1].out()
    n = int(input()) # get new n and repeat until -1
    
