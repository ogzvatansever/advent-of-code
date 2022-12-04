
dayinputraw = open("./inputs/day5.txt")

""" Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
For example:

ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
jchzalrnumimnmhp is naughty because it has no double letter.
haegwjzuvuyypxyu is naughty because it contains the string xy.
dvszwmarrgswjxmb is naughty because it contains only one vowel.
How many strings are nice? """

""" dayinput = dayinputraw.split() """
dayinput = dayinputraw.read()

vowels = ["a","e","i","o","u"]
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

def isitnice(a) :
    vowels_num = 0
    doubleletter = 0
    for i in a :

        if i in vowels :
            vowels_num += 1

    for s in range(1,len(a)) :
        if a[s] == a[s-1] :
            doubleletter += 1

    if vowels_num < 3 :
        return False

    if 'ab' in a or 'cd' in a or 'pq' in a or 'xy' in a :
        return False

    if doubleletter >= 1 :
        return True
    else :
        return False

howmanyisnice = 0

for x in dayinput.split() :
    if isitnice(x) :
        howmanyisnice += 1

print(howmanyisnice)
