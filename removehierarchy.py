import os
try:
 os.removedirs("C:\\Usersvikash of functions\\PythonProject1.py\\.idea\\inspectionProfiles\\PythonProject1.py\\vikashusefloder\\flodwe\\user")
 print("floder in floder is remove seccfully")
except FileNotFoundError:
    print("file is not /delete ")
except OSError:
    print("ensure that your file is empty")