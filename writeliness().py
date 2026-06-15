x=[12,34,"dhf",35.56]
with open("stud1.data","a+")as kn:
    print(":"*80)
    kn.write(str(x)+"\n")
    print("data is written as to the file")
