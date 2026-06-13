sno=10
name="vikas"
marks=23.9
with open("stud.data","w")as kb:
    kb.write(str(sno)+"\t")
    kb.write(name+"\t")
    kb.write(str(marks)+"\t")
    print("data wrttien in the file ")