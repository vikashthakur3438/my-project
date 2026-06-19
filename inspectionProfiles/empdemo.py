from empmenu import menu
from unpickle import readrecord
from picking import  saverecord
ch=int(input("enter your choice :"))
try:
  match(ch):
     case 1:
       saverecord()
     case 2:
         readrecord()
     case 3:
        print("thank you using program")
     case _:
        print("ur secletion is wrong ")
except ValueError:
    print("don't enter the alpha")