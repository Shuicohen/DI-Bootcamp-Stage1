# Excersize 1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # Convert the Currency object to a string.
    def __str__(self):
        return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"
    
    # Convert the Currency object to an integer, which is the amount.
    def __int__(self):
        return self.amount
    
    # Return a string representation of the Currency object for debugging.
    def __repr__(self):
        return self.__str__()
    
    # Add two Currency objects together.
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError("Cannot add currencies of different types")
            return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            return NotImplemented

    # Handle in-place addition (e.g., +=) between the current Currency object and another object.   
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError("Cannot add currencies of different types")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            return NotImplemented
        
        return self
    
# Example usage
if __name__ == "__main__":
    # Create Currency objects with different amounts and types.
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    print(str(c1))
    print(int(c1))
    print(repr(c1))
    print(c1 + 5)
    print(c1 + c2)
    print(c1)

    c1 += 5
    print(c1)

    c1 += c2
    print(c1)

    try:
        print(c1 + c3)
    except TypeError as e:
        print(e)


# Excersize 2
# func.py
def sum_and_print(a, b):
    results = a + b
    print(f"The sum of {a} and {b} is {results}")

# excersize_one.py
from func import sum_and_print

sum_and_print(1, 2)


# Excersize 3
import random
import string

def generate_random_string(length=5):
    letters = string.ascii_letters
    random_string = ''.join(random.choice(letters) for i in range(length))
    return random_string

# Example usage
if __name__ == "__main__":
    random_str = generate_random_string()
    print(f"Generated random string: {random_str}")


# Excersize 4
from datetime import datetime

def display_current_date():
    current_date = datetime.now().date() # Get the current date
    print(f"Current date: {current_date}")

# Example usage
if __name__ == "__main__":
    display_current_date()


# Excersize 5
from datetime import datetime, timedelta

def time_until_next_year():
    now = datetime.now()
    current_year = now.year
    next_year = current_year + 1
     # Define the target date and time as January 1st of the next year at midnight
    next_year_start = datetime(next_year, 1, 1)
    # Calculate the time difference
    time_remaining = next_year_start - now
    # Extract days, hours, minutes, and seconds from the timedelta object
    days = time_remaining.days
    seconds = time_remaining.seconds
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60

    print(f"Time until January 1st: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds")

# Example usage
if __name__ == "__main__":
    time_until_next_year()


# Excersize 6
from datetime import datetime

def calculate_lived_minutes(birthdate_str, date_format="%Y-%m-%d"):
    try:
        birthdate = datetime.strptime(birthdate_str, date_format)
        now = datetime.now()
        time_lived = now - birthdate
        minutes_lived = time_lived.total_seconds() / 60
        print(f"You have lived {int(minutes_lived)} minutes.")
    except ValueError:
        print("Invalid date format. Please enter a date in the format YYYY-MM-DD.")

def main():
    birthdate_input = input("Enter your birthdate (YYYY-MM-DD): ")
    calculate_lived_minutes(birthdate_input)

if __name__ == "__main__":
    main()


# Excersize 7
from faker import Faker

fake = Faker()
users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users.append(user)

# Example usage
if __name__ == "__main__":
    for _ in range(5):
        add_user()
    
    for user in users:
        print(user)