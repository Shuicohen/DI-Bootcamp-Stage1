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