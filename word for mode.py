def filecountinfo():
    try:
        filname=input("the enter the any file :")
        with open(filname,"rt")as fp:
            nol=0
            now=0
            noc=0
            line=fp.read()
            if(line.isalpha()):
              for lines in line:
                nol+=1
                now=now+len(line.split())
                noc=noc+len(line)
            else:
                print(":"*80)
                print("number of lines=",nol)
                print("number of words=",now)
                print("number of chars=",noc)
    except FileNotFoundError:
        print("don't find by file")
#main porgram
filecountinfo()