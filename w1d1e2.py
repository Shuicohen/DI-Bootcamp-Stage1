#Excersize 1

for step in range(0, 4):
    print("Hello world")
for step in range(0, 4):
    print("I love python")

#Excersize 2
month = input("please provide a month (1-12): ")
if int(month) >= 3 and int(month) <= 5:
    print("It's spring")
elif int(month) >= 6 and int(month) <= 8:
    print("It's summer")
elif int(month) >= 9 and int(month) <= 11:
    print("It's autumn")
elif int(month) >= 12 or int(month) <= 2:
    print("It's winter")