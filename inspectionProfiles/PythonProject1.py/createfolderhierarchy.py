import os
try:
 os.makedirs("vikashusefloder\\flodwe\\user")
 print("your flofer id certed succsfully")
except FileExistsError:
    print("file is all ready exit ")