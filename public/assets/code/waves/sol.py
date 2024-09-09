class Pebble:
    def __init__(self, x, y, t):
        self.x = x
        self.y = y
        self.t = t
    
    def effect_on_cell(self, x, y, t):
        if abs(x - self.x) + abs(y - self.y) == t - self.t \
            or self.x < x < bank1 \
                and x - self.x + 2 * (bank1 - x) + abs(y - self.y) == t - self.t \
            or bank1 < self.x < x < bank2 \
                and (t - self.t) - (x - self.x + 2 * (bank2 - x) + abs(y - self.y)) >= 0 \
                and ((t - self.t) - (x - self.x + 2 * (bank2 - x) + abs(y - self.y))) % (bank2 - bank1) == 0 \
            or bank1 < x < self.x < bank2 \
                and (t - self.t) - self.x - x + 2 * (x - bank1) + abs(y - self.y) >= 0 \
                and ((t - self.t) - self.x - x + 2 * (x - bank1) + abs(y - self.y)) % (bank2 - bank1) == 0 \
            or bank2 < x < self.x and self.x - x + 2 * (x - bank2) + abs(y - self.y) == t - self.t:
                    return 1
        
        if abs(x - self.x) + abs(y - self.y) == t - self.t - 2 \
            or self.x < x < bank1 \
                and x - self.x + 2 * (bank1 - x) + abs(y - self.y) == t - self.t - 2 \
            or bank1 < self.x < x < bank2 \
                and (t - self.t - 2) - (x - self.x + 2 * (bank2 - x) + abs(y - self.y)) >= 0 \
                and ((t - self.t - 2) - (x - self.x + 2 * (bank2 - x) + abs(y - self.y))) % (bank2 - bank1) == 0 \
            or bank1 < x < self.x < bank2 \
                and (t - self.t - 2) - self.x - x + 2 * (x - bank1) + abs(y - self.y) >= 0 \
                and ((t - self.t - 2) - self.x - x + 2 * (x - bank1) + abs(y - self.y)) % (bank2 - bank1) == 0 \
            or self.x > x > bank2 and self.x - x + 2 * (x - bank2) + abs(y - self.y) == t - self.t - 2:
                    return -1
        
        return 0


p = int(input())

pebbles = []
for i in range(p):
    x, y, t = map(int, input().split())
    pebbles.append(Pebble(x, y, t))

bank1, bank2 = map(int, input().split())
if bank1 > bank2:
    bank1, bank2 = bank2, bank1

r = int(input())
for y in range(4, -5, -1):
    for x in range(-4, 5):
        if x == bank1 or x == bank2:
            print("X", end="")
        else:
            depth = 0
            for pebble in pebbles:
                depth += pebble.effect_on_cell(x, y, r)
            if depth < 0:
                print("o", end="")
            elif depth == 0:
                print("-", end="")
            else:
                print("*", end="")
    print()
