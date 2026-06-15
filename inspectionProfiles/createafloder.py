import os
try:
 os.mkdir("wkhfeofjl")
 print("file folder certed _verfiy")
except FileExistsError:
    print("file is allready in creted")
except FileNotFoundError:
    print("plz ensure that your file ie exit root ")