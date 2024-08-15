# Part 1:

# 1. A class is a blueprint for creating objects. It defines attributes(data) and methods(functions) that the objects created from it will have.
# 2. An instance is a specific object created from a class. 
# 3. Encapsulation is the concept of wrapping data and methods that operate on the data into a single unit, or class.
# 4. Abstraction is the process of hiding the implementation details and showing only functionality to the user.
# 5. Inhereitance is the capability of one class to derive or inherit the properties from another class.
# 6. Multiple inheritance is a feature of some object-oriented programming languages where one class can inherit properties from more than one parent class.
# 7. Polymorphism is the ability of an object or class to take on many forms.
# 8. MRO is the order in which methods are inherited in the presence of multiple inheritance.

# Part 2:

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"
    
import random

class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        if len(self.cards) == 52: # Ensure the deck is complete before shuffling
            random.shuffle(self.cards)
        else:
            print("Deck is not complete. Unable to shuffle.")

    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop(0)
        else:
            print("No more cards to deal")
            return None
        
    def __repr__(self):
        return f"Deck of {len(self.cards)} cards"
    

deck = Deck()
deck.shuffle()
card = deck.deal()

print(f"Dealt card: {card}")
print(deck)