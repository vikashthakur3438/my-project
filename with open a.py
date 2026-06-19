with open("kvr5.py","a+")as fb:
    print("**"*80)
    print("name of file=",fb.name)
    print("file mode=",fb.mode)
    print("in this file is readable?=",fb.readable())
    print("in this file is writeble?=",fb.writable())
    print("in this file is closed=",fb.closed)
    print("-"*80)
print("in this file is closed=",fb.closed)

with open("kvr.py","r+")as fp:
    print("^"*80)
    print("name of the file=",fp.name)
    print("file of mode=",fp.mode)
    print("in this file is readable?=",fp.readable())
    print("in file is a writeble=",fp.writable())
    print("in this file is closed=",fp.closed)
print("*"*80)
with open("C:\\Usersvikash of functions\\PythonProject1\\kvr3.data","w+") as fb:
    print("_"*80)
    print("name of file=",fb.name)
    print("file mode=",fb.mode)
    print("file is e=readable?=",fb.readable())
    print("file is weritvble?=",fb.writable())
    print("file is closed=",fb.closed)
print("*"*80)
print("file is closed=",fb.closed)


