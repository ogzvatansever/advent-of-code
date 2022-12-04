import hashlib

def Hash_Finder(a,z=5,b='0') :
    turn = 0
    while True :
        key = str(a) + str(turn)
        result = hashlib.md5(key.encode('utf-8')).hexdigest()
        stringlist = ''
        for i in result :
            stringlist += i
            if len(stringlist) == z :
                break
        if b*z == stringlist :
            return turn
        turn += 1

print(Hash_Finder('yzbqklnj'))