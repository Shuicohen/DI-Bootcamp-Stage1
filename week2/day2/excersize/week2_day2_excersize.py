# Excersize 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

all_cats = [
    Bengal('Bengal', 1),
    Chartreux('Chartreux', 1),
    Siamese('Siamese', 1)
    ]

sara_pets = Pets(all_cats)
sara_pets.walk()


# Excersize 2
# dog.py
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight/self.age*10
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f'{self.name} wins the fight against {other_dog.name}'
        elif self.run_speed() < other_dog.run_speed():
            return f'{other_dog.name} wins the fight against {self.name}'
        else:
            return "It's a tie"
        

dog1 = Dog('Fido', 3, 20)
dog2 = Dog('Buddy', 2, 10)
dog3 = Dog('Rex', 4, 30)

print(dog1.bark())
print(f"{dog1.name}'s run speed is {dog1.run_speed()}")
print(dog2.bark())
print(f"{dog2.name}'s run speed is {dog2.run_speed()}")
print(dog3.bark())
print(f"{dog3.name}'s run speed is {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))


# Excersize 3
# pet_dog.py
import random
from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join([dog.name for dog in args])
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and can't do a trick.")

# Example usage:
if __name__ == "__main__":
    # Create instances of PetDog
    pet_dog1 = PetDog("Buddy", 5, 20)
    pet_dog2 = PetDog("Max", 3, 25)
    pet_dog3 = PetDog("Rocky", 4, 30)

    # Train the dog
    pet_dog1.train()  # Should print "Buddy is barking" and set trained to True

    # Play together
    pet_dog1.play(pet_dog2, pet_dog3)  # Should print "Max, Rocky all play together"

    # Perform a trick
    pet_dog1.do_a_trick()  # Should print one of the random tricks


# Excersize 4
class Family:
    def __init__(self, last_name, members):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on their birth, {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
    
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is child: {member['is_child']}")

initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]    

my_family = Family("Smith", initial_members)

my_family.family_presentation()

my_family.born(name="John", age=0, gender="Male", is_child=True)

print(f"Is Michael over 18? {my_family.is_18('Michael')}")
print(f"Is Sarah over 18? {my_family.is_18('Sarah')}")

my_family.family_presentation()


# Excersize 5
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['incredible_name']} uses their power: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power")
                return
        print(f"Member with name {name} not found in the family")

    def incredible_presentation(self):
        print("*Here is our powerful family:*")
        super().family_presentation()
        for member in self.members:
            print(f"Incredibles name: {member['incredible_name']}, Power: {member['power']}")
        
incredible_family = TheIncredibles(
    last_name="Incredibles",
    members=[
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
)

incredible_family.incredible_presentation()
incredible_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')
incredible_family.incredible_presentation()

try:
    incredible_family.use_power('Michael')
    incredible_family.use_power('Sarah')
    incredible_family.use_power('Jack')
except Exception as e:
    print(e)
