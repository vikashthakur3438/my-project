import os
try:
 os.rename("wkhfeofjl","v2.data")
 print("folder renamed sccesfully_verfiy")
except FileNotFoundError:
    print("your folder name is a allready remaned")
