from fractions import Fraction
from decimal import Decimal

if __name__ == "__main__":
    a = Decimal(input("Please enter a number: "))
    print(Fraction(a))