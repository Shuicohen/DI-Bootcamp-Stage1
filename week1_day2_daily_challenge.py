# Challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))
multiplies = []
for i in range(1, length + 1):
    multiplies.append(number * i)
print(multiplies)   

# Challenge 2
user_input = input("Enter a string: ")
result = ""
for i in range(len(user_input)):
    if i == 0 or user_input[i] != user_input[i - 1]:
        result += user_input[i]
print("Resulting string:", result)        