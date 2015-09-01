"""How Many Balloons Alghorithm"""

import math

class BalloonCount(object):
	def __init__(self, weight):
		self.weight = weight

	def how_many_balloons(self):
		balloons = self.weight * 453.593 / 14
		return math.ceil(balloons)

weight = BalloonCount(int(input("Enter your weight ")))
number_of_balloons = weight.how_many_balloons()
print("It would take %s balloons to lift %s lbs!" % (number_of_balloons, weight.weight))