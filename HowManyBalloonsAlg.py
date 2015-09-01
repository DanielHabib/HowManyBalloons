"""How Many Balloons Alghorithm"""

import math

class BalloonCount(object):
    def __init__(self, weight):
        self.weight = weight

    def how_many_balloons(self):
        balloons = self.weight * 453.593 / 14
        return ("It would take %s balloons to lift %s lbs!" % (math.ceil(balloons), self.weight)) 

weight = BalloonCount(int(input("Enter your weight ")))
print (weight.how_many_balloons())