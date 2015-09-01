"""How Many Balloons Alghorithm"""

import math

class BalloonCount(object):
    grams = 453.593
    liters_in_balloon = 14
    def __init__(self, weight):
        self.weight = weight

    def how_many_balloons(self):
        balloons = self.weight * grams / liters_in_balloon
        return ("It would take %s balloons to lift %s lbs!" % (math.ceil(balloons), self.weight)) 

if __name__=='__main__':
    weight = BalloonCount(int(input("Enter your weight ")))
    print (weight.how_many_balloons())
