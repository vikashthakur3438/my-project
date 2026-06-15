print("ebter the data from keyboard press @ to stop:")
with open('knr.data', "a") as kn:
    while(True):
        kbdata=input()
        if(kbdata!="@"):
            kn.write(kbdata+"\n")
        else:
            print("data written to the file__verify")