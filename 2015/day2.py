dayInput = open("adventofcode/2015/inputs/day2.txt", "r")

def calculateSurfaceArea(l,w,h) :
    l=int(l)
    w=int(w)
    h=int(h)
    lw = l*w
    wh = w*h
    hl = h*l
    lisSlack = []
    lisSlack.extend((lw,wh,hl))
    lisSlack.sort()
    lisChars = []
    lisChars.extend((l,w,h))
    lisChars.sort()
    calculateSurfaceArea.ribbon = 2*lisChars[0]+2*lisChars[1]+(l*w*h)
    calculateSurfaceArea.SurfaceArea = 2*lw+2*wh+2*hl+lisSlack[0]

sumAnswer = 0
sumRibbon = 0

for x in dayInput :
    strout = ""
    for j in x :
        if j=="x" :
            j=","
        if j=="\n" :
            j=""
        strout += j
    strin = strout.split(",")
    calculateSurfaceArea(strin[0],strin[1],strin[2])
    sumAnswer += calculateSurfaceArea.SurfaceArea
    sumRibbon += calculateSurfaceArea.ribbon
print(sumAnswer)
print(sumRibbon)