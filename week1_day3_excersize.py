# Excersize 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

a_dict = dict(zip(keys, values))
print(a_dict)


# Excersize 2
def ticket_price(age):
    if age < 3:
        return 0
    elif age < 12:
        return 10
    else:
        return 15
    
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
print("family costs:")
total_cost = 0
for member, age in family.items():
    cost = ticket_price(age)
    print(f"{member}: ${cost}")
    total_cost += cost

print(f"total cost: ${total_cost}")

user_family = {}
number_members = int(input("How many members in your family? "))

for i in range(number_members):
    name = input("Enter name: ")
    age = int(input("Enter age: "))
    user_family[name] = age
print("family costs:")

total_cost_user = 0
for member, age in user_family.items():
    cost = ticket_price(age)
    print(f"{member}: ${cost}")
    total_cost_user += cost

print(f"Family's total cost: ${total_cost_user}")


# Excersize 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "Hugo Boss", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
print(f"Zara's clients are {', '.join(brand['type_of_clothes'])}")

brand["country creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(f"The last international competitor is {brand['international_competitors'][-1]}")
print(f"The major clothes color in the US are {', '.join(brand['major_color']['US'])}")
print(f"The amount of key value pairs is {len(brand)}")
print(f"The keys of the dictionary are {', '.join(brand.keys())}")

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print(f"The number of stores is {brand['number_stores']}")


# Excersize 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# 1st result
disney_users_A = {}
for index, user in enumerate(users):
    disney_users_A[user] = index
print(disney_users_A)

# 2nd result
disney_users_B = {}
for index, user in enumerate(users):
    disney_users_B[index] = user
print(disney_users_B)

# 3rd result
disney_users_C = {}
sorted_users = sorted(users)
disney_users_C = {user: index for index, user in enumerate(sorted_users)}
print(disney_users_C)

# Names containing "i"
filtered_users_i = {user: index for index, user in enumerate(users) if 'i' in user}
print(filtered_users_i)

# Names starting with "M" or "P"
filtered_users_mp = {user: index for index, user in enumerate(users) if user.startswith(('M', 'P'))}
print(filtered_users_mp)              