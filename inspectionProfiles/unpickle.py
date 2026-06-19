import pickle
def readrecord():
   with open("knv.data","rb")as fi:
     while(True):
        try:
             record=pickle.load(fi)
             for val in record:
                    print("{}".format(val),end="\t")
             print()
        except EOFError:
            print("some thing went wrong")
            break

