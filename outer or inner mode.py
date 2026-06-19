try:
    scrtife=input("enter the source file:")
    with open(scrtife,"r")as kv:
        detife=input("enter the source file:")
        with open(detife,"w") as kh:
            scrtife=kv.read()
            kh.write(scrtife)
            print("file copied_vefiy")
except FileNotFoundError:
    print("source file doesnot found")