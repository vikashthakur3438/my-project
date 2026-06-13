import csv
try:
    with open("stundent.py")as fp:
        csvr=csv.reader(fp)
        for record in csvr:
            print("{}".format(record))
        print()
except FileNotFoundError:
    print("file not find")