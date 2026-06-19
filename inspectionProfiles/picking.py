import pickle
def saverecord():
  with open("knv.data","ab")as fp:
    while(True):
        try:
#accept the employee number
            print("------------------------------------")
            empno=int(input("enter the employee i'd number:"))
            empname=input("enter the employee name:")
            enpsal=float(input("enter the employee salary:"))
            dsg=input("enter employee designation:")
#create the empty list and add the employee data
            lst=[]
            lst.append(empno)
            lst.append(empname)
            lst.append(enpsal)
            lst.append(dsg)
            break
        except ValueError:
            print("don't enter the alupha ,str ,sybmls")
#save or tranfer lst data into the file
    pickle.dump(lst,fp)
    print("employee record saved in file succesfully")


