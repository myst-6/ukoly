class Pebble:
    def __init__(self, x, y, t):
        self.x = x
        self.y = y
        self.t = t
    
    def effect_on_cell(self, x, y, t):
        result = 0
        elapsed_time = t - self.t - abs(y - self.y)

        if elapsed_time < 0:
            return 0
        if min(x, self.x) < bank1 < max(x, self.x) or min(x, self.x) < bank2 < max(x, self.x):
            return 0
        elif x == self.x and elapsed_time == 0:
            return 1

        # right wave
        if self.x <= x < bank1 and elapsed_time == x - self.x:  # pebble -> wave -> left bank, no reflections have happened yet
            result += 1
        elif max(self.x, x) < bank1 and elapsed_time == (bank1 - self.x - 1) + (bank1 - x):  # the pebble and the wave are to the left of the left bank, the wave has been reflected once
            result += 1
        elif bank2 < self.x <= x and elapsed_time == x - self.x:  # right bank -> pebble -> wave
            result += 1
        elif bank1 < min(x, self.x) and max(x, self.x) < bank2:  # the pebble and the wave are in between the banks
            elapsed_time += self.x - bank1
            if elapsed_time >= (x - bank1) and (elapsed_time - (x - bank1)) % ((bank2 - bank1 - 1) * 2) == 0:  # an even number of reflections
                result += 1
            elif elapsed_time >= (bank2 - x) + (bank2 - bank1 - 1) and (elapsed_time - (bank2 - x) - (bank2 - bank1 - 1)) % ((bank2 - bank1 - 1) * 2) == 0:  # an odd number of reflections
                result += 1
            elapsed_time -= self.x - bank1
        
        # left wave
        if x <= self.x < bank1 and elapsed_time == self.x - x:  # wave -> pebble -> left bank
            result += 1
        elif bank2 < x <= self.x and elapsed_time == self.x - x:  # right bank -> wave -> pebble, no reflections have happened yet
            result += 1
        elif bank2 < min(x, self.x) and elapsed_time == (self.x - bank2 - 1) + (x - bank2):  # the pebble and the wave are to the right of the right bank, the wave has been reflected once
            result += 1
        elif bank1 < min(x, self.x) and max(x, self.x) < bank2:  # the pebble and the wave are in between the banks
            elapsed_time += bank2 - self.x
            if elapsed_time >= (bank2 - x) and (elapsed_time - (bank2 - x)) % ((bank2 - bank1 - 1) * 2) == 0:  # an even number of reflections
                result += 1
            elif elapsed_time >= (x - bank1) + (bank2 - bank1 - 1) and (elapsed_time - (x - bank1) - (bank2 - bank1 - 1)) % ((bank2 - bank1 - 1) * 2) == 0:  # an odd number of reflections
                result += 1
        
        return result


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
                depth -= pebble.effect_on_cell(x, y, r - 2)
            if depth < 0:
                print("o", end="")
            elif depth == 0:
                print("-", end="")
            else:
                print("*", end="")
    print()
