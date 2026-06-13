try:
 filename=input("enter the file name yto view to content:")
 fv=open(filename,"r")
except FileNotFoundError:
    print("file is not find")
else:
    filedata=fv.read()
    print("_________________________")
    print("content of the view:{}".format(fv.name))
    print("_____________________________")
    print(filedata)

print("____________________________________________________________________________")
try:
    filename=input()
    fc=open(filename,"r")
except FileNotFoundError:
    print("file doesnot found")
else:
    filedate=fc.read()
    print("______________----------")
    if(len(filedate)==0):
        print("empty file")
    else:
        print("----------------")
        print("content of the veiw:{}".format(fv.name))
        print("______________________")
        print(filedata)