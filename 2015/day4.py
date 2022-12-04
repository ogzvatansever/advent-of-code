import hashlib

x = 'abcdef'
xad = '609043'
xtest = x + xad
turn = 1
first5 = ''

while True :
    key_first = 'yzbqklnj'
    key = key_first + str(turn)
    turn += 1
    result = hashlib.md5(key.encode('utf-8')).hexdigest()
    first5 = ''
    for i in result :
        first5 += i
        if len(first5) == 5 :
            break
    if '00000' == first5 :
        print(turn-1)
        break


#print(hashlib.md5(xtest.encode('utf-8')).hexdigest())