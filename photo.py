try:
    with open("C:\\Users\\visha\\OneDrive\\Pictures.PNGimage","rb")as rp:
        with open("put.py","wb")as wp:
            srcdata=rp.read()
            wp.write(srcdata)
            print("file is copted")
except FileNotFoundError:
    print("source file doesnot exit")