import hashlib

x = 'abcdef'
xad = '609043'
xtest = x + xad
turn = 1
first6 = ''

while True :
    key_first = 'yzbqklnj'
    key = key_first + str(turn)
    turn += 1
    result = hashlib.md5(key.encode('utf-8')).hexdigest()
    first6 = ''
    for i in result :
        first6 += i
        if len(first6) == 6 :
            break
    if '000000' == first6 :
        print(turn-1)
        break


#print(hashlib.md5(xtest.encode('utf-8')).hexdigest())