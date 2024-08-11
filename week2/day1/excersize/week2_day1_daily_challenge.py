class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, quantity=1):
        if animal_type in self.animals:
            self.animals[animal_type] += quantity
        else:
            self.animals[animal_type] = quantity

    def get_info(self):
        info = f"{self.farm_name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal}: {count}\n"
        info += "\n    E-I-E-I-O!"    
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        animal_type = self.get_animal_types()
        animals_string = ', '.join(animal + ('s' if self.animals[animal] > 1 else '') for animal in animal_type)
        return f"{self.farm_name}'s farm has {animals_string}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

# Print the farm info
print(macdonald.get_info())

# Get the list of animal types
print(macdonald.get_animal_types())

# Get the short info summary
print(macdonald.get_short_info())
