import random

# Ask user for a string
user_string = input("please provide a 10-character string: ")

# Check lenth of string
if len(user_string ) < 10:
    print("sting not long enough")
elif len(user_string) > 10:
    print("string too long")
else:
    print("perfect string")

# Print the first and last characters
print("first character: " + user_string[0])  
print("last character: " + user_string[-1])

# Construct the string caracter by character
for i in range(1, len(user_string) + 1):
    print(user_string[:i])

# Shuffle the string and print it
shuffled_list = list(user_string)
random.shuffle(shuffled_list)
shuffled_string = "".join(shuffled_list)
print("shuffled string: " + shuffled_string)  
