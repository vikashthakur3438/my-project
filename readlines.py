try:
    with open("dc.data")as kb:
        kbdata=kb.readlines()
        print(":"*80)
        print(kbdata)
        print(":"*80)
except FileNotFoundError:
    print("file is not found")
