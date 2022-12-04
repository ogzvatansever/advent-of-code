import math
toplam = 0
for k in range(23,2323) :
    toplam += (2*(1-(-1)**k))/((math.log2(k)-math.sin(k))**2)

print(round(toplam,3))