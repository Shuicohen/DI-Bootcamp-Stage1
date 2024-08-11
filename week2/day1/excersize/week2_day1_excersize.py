# Exercise 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Garfield", 8)
cat2 = Cat("Heathcliff", 3)
cat3 = Cat("Mittens", 4) 

def find_oldest_cat(*cats):
    # Finds the oldest cat
    oldest_cat = max(cats, key=lambda cat: cat.age)
    return oldest_cat

# Find the oldest cat and print the result
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


# Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")   

# Create two instances of the Dog class
davids_dog = Dog("Rex", 50)
# Print the details of David's dog and call its methods
print(f"David's dog name: {davids_dog.name} \nDavid's dog height: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()         

sarahs_dog = Dog("Teacup", 20)
# Print the details of Sarah's dog and call its methods
print(f"Sarah's dog name: {sarahs_dog.name} \nSarah's dog height: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Compare heights and print bigger dogs name
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger")
else:
    print(f"{sarahs_dog.name} is bigger")


# Exercise 3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)        

stairway = Song(["There's a lady who's sure", "all that glitters is gold", "and she's buying a stairway to heaven"])    

stairway.sing_me_a_song()


# Exercise 4
class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"Animal in {self.name}:{', '.join(self.animals)}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        # Sort the animals alphabetically
        self.animals.sort()
        # Group the animals by their first letter
        grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]         
            else:
                grouped_animals[first_letter].append(animal)

        #convert the grouped animals dictionary into a list of tuples for number keys
        self.grouped_animals = {index + 1: grouped_animals[key] if len(grouped_animals[key]) > 1 else grouped_animals[key][0] 
                                for index, key in enumerate(sorted(grouped_animals))}
        
    def get_groups(self):
        for key, value in self.grouped_animals.items():
            print(f"Group {key}: {value}")

# Create a Zoo object
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Add animals to the zoo
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")

# Print all the animals in the zoo
ramat_gan_safari.get_animals()

# Sell an animal
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()

# Sort animals and group them by their first letter
ramat_gan_safari.sort_animals()

# Print the groups of animals
ramat_gan_safari.get_groups()

