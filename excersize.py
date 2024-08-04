# Excersize 1
for step in range(0, 4):
    print("hello")

# Excersize 2
print((99^3)*8)  

#Excersize 3
#False
#true
#False
#TypeError
#False

#Excersize 4
computer_brand = "lenovo"
print("i have a " + computer_brand + " computer")

#Excersize 5
name = "Yehoshua"
age = "23"
shoe_size = "45"
info = f"my name is {name} and I'm {age} and my shoe size is {shoe_size}" 
print(info)

#Excersize 6
a = 10
b = 5
if a > b:
    print("Hello World")
else:
    print("Better luck next time")

#Excersize 7
number = int(input("please provide a number:"))
if number % 2 == 0:
        print("even")
else:
        print("odd")

#Excersize 8
my_name = "Yehoshua"
user_name = input("please provide username:")
if user_name == my_name: 
     print(f"hello {user_name}, I guess we got the same name")
else:
     print(f"hello {user_name}, my name is {my_name} better luck next time")
   
#Excersize 9
height = int(input("please provide your height:"))
if height >= 145:
    print("you can ride")   
else:
    print("you can't ride")