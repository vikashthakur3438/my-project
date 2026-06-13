print("enter the data from keyboard press@ to stop:")
with open("dc.data","a")as kf:
    while(True):
        kfdata=input()
        if(kfdata!="@"):
            kf.write(kfdata)
        else:
            print("data written to the file __verify")
            break