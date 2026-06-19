import csv
try:
    with open("stundent.py","r")as fd:
        cvsr=csv.DictReader(fd)
        print(":"*80)
        for record in cvsr:
            for h,v in record.items():
                print("\t{}--->{}".format(h,v))
            print(":"*80)
except FileNotFoundError:
    print("file is not found")