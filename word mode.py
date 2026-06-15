def filecountinfo():
    try:
        filname=input("the enter the any file :")
        with open(filname,"rt")as kb:
         line=kb.read()
         word=line.split()
        for words in word:
            if words.isalpha():
             print("{}".format(words))
    except FileNotFoundError:
        print("don't find by file")
#main porgram
filecountinfo()