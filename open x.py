try:
  with open("kvrs2.data","x")as kb:
     print("*"*80)
     print("file name=",kb.name)
     print("file mode=",kb.mode)
     print("is this is a readble?=",kb.readable())
     print("is this file is a wertible?=",kb.writable())
     print("is this file is closed=",kb.closed)
  print("_"*80)
  print("is the file is closed=",kb.closed)
except FileExistsError:
    print("file not found")