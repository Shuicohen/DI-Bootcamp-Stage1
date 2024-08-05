# Excersize 1
my_fav_numbers = {3, 5, 7, 9, 12, 15}
my_fav_numbers.update([17, 19])
my_fav_numbers.remove(15)
friends_fav_numbers = {2, 4, 6, 8, 10}
our_fav_numbers = my_fav_numbers.union(friends_fav_numbers)
print("my_fav_numbers:", my_fav_numbers)
print("friends_fav_numbers:", friends_fav_numbers)
print("our_fav_numbers:", our_fav_numbers)

# Excersize 2
# no its not possible

# Excersize 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
basket.clear()
print(basket)

# Excersize 4
# the difference between an integer and a float is that integers are whole numbers, while floats can have fractional parts.
sequence = [1.5 + i * 0.5 for i in range(10)]
print(sequence)

# Excersize 5
for i in range(1, 21):
    print(i)

numbers = list(range(0, 21)) 
for i in range(0, len(numbers), 2):
    print(numbers[i])   

# Excersize 6
my_name = "Yehoshua"
while True:
    user_name = input("Enter your name: ")
    if user_name == my_name:
        print("Welcome", my_name + "!") 
        break
    else:
        print("Try again")

# Excersize 7
favorite_fruits_input = input("Enter your favorite fruits (one or several): ")
favorite_fruits = favorite_fruits_input.split()  
chosen_fruit = input("Enter the name of any fruit: ")  
if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Excersize 8
toppings = []
while True:
    topping = input("Enter a pizza topping (or type 'quit' to finish): ").strip()
    if topping.lower() == 'quit':
        break
    if topping:
        toppings.append(topping)
        print(f"Added {topping} to your pizza.")
    else:
        print("You entered an empty topping. Please enter a valid topping.")

base_price = 10
topping_price = 2.5
total_price = base_price + (len(toppings) * topping_price)
print("Toppings on your pizza:")
for topping in toppings:
    print(f"- {topping}")

print(f"Total price: ${total_price:}")
