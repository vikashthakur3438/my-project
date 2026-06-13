try:
    with open("dc.data")as jk:
      jkdata=jk.read()
      print("_"*80)
      print(jkdata)
except FileNotFoundError:
    print("file does'not exit ")