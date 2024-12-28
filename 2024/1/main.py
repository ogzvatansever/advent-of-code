if __name__ == '__main__':
    input = open("input.txt", "r").read().split("\n")
    left = []
    right = []
    sum = 0
    similarity = 0
    for i in input:
        x, y = i.split("   ")
        left.append(x), right.append(y)
    left.sort(), right.sort()

    for i in range(len(left)):
        sum += abs( int(left[i]) - int(right[i]) )
        last_index = -1
        n = 0
        while True :
            try :
                last_index = right.index(left[i], last_index+1)
            except :
                break
            else :
                n += 1
        similarity += int(left[i]) * n

    print(sum)
    print(similarity)