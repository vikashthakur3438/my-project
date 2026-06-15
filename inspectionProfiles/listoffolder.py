import os
filename=os.listdir("C:\\Usersvikash of functions\\my project\\.idea")
print("_"*80)
print("number of files=",len(filename))
print(":"*80)
for filnames in filename:
    print(filnames)
print("-"*80)
print("------------------------------------------------------------------------------")
import os
filename=os.listdir("C:\\Usersvikash of functions\\my project\\.idea")
print("**"*56)
print("number of files=",len(filename))
print("-"*80)
nop=0
if(filename.startswith(",py")):
    print(filename)
    nop+1
    print("_"*80)
    print("number of python file=",nop)
    print(":"*80)