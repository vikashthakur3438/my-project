import os
try:
 os.rmdir("C:\\Usersvikash of functions\\PythonProject1.py\\.idea\\inspectionProfiles\\PythonProject1.py")
 print("your file romve succefully")
except FileNotFoundError:
    print("file is all ready delte")
except OSError:
    print("ensure the folder must be empty")