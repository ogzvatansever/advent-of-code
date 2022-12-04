def main() :
    inputfile = open('inputday1.txt','rt')
    elf = 0 # I did it like this to get it same with the list position
    elf_cals = []
    for i in inputfile.readlines() :
        if i.split() != [] :
            try :
                elf_cals[elf] = elf_cals[elf]+i.split()
            except :
                elf_cals.append(i.split())
            finally :
                pass
        else :
            cal_sum = 0
            for x in elf_cals[elf] :
                cal_sum += int(x)
            elf_cals[elf] = cal_sum
            elf += 1
    # Calling the else for last time
    cal_sum = 0
    for x in elf_cals[-1] :
        cal_sum += int(x)
    elf_cals[elf] = cal_sum
    elf_cals.sort()
    print(elf_cals[-1]) # Answer of part 1
    
    top3 = 0
    for i in range(1,4) :
        top3 += elf_cals[-i]
    print(top3) # Answer of part 2

if __name__ == "__main__" :
    main()