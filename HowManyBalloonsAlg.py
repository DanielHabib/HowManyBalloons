"""How Many Balloons Alghorithm"""

import math

def how_many_balloons(weight):
	balloons = weight * 453.593 / 14
	return math.ceil(balloons)

weight = int(input("Enter your weight "))
number_of_balloons = how_many_balloons(weight)
print("It would take %d balloons to lift %d lbs!" % (number_of_balloons, weight))
