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
