# Excersize 1
def display_message():
    print("I am learning Python")

display_message()   


# Excersize 2
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Alice in Wonderland")


# Excersize 3
def describe_city(city, country = "Iceland"):
    print(f"{city} is in {country}")

describe_city("Reykjavik")
describe_city("Paris", "France")


# Excersize 4
import random

def compare_numbers(user_number):
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100")

    random_number = random.randint(1, 100)
    if user_number == random_number:
        print(f"Success! Both numbers are {user_number}.")
    else:
        print(f"Sorry, {user_number} is not correct. The correct number is {random_number}.")

compare_numbers(int(input("Enter a number between 1 and 100: ")))


# Excersize 5
def make_shirt(**kwargs):
    size = kwargs.get("size", "large")
    text = kwargs.get("text", "I love Python")
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()    
make_shirt(size = "medium")
make_shirt(size = "small", message ="Hello World")
make_shirt(message = "Coding is fun", size = "extra large")


# Excersize 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    for name in magician_names:
        print(name)

show_magicians(magician_names)

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = f"The Great {magician_names[i]}"

make_great(magician_names)
show_magicians(magician_names)


# Excersize 7
import random
def get_random_temp(season):
    if season == "winter":
        return round(random.randint(-10, 16), 1)
    elif season == "spring":
        return round(random.randint(0, 23), 1)
    elif season == "summer":
        return round(random.randint(16, 40), 1)
    elif season == "autumn":
        return round(random.randint(-5, 24), 1)
    else:
        raise ValueError("Invalid season")

def determine_season(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        raise ValueError("Invalid month")

def main():
    month = int(input("Enter a month (1-12): "))
    try:
        season = determine_season(month)
        temp = get_random_temp(season)
        print(f"The temperature right now is {temp} degrees Celsius")
        if temp < 0:
            print("Brrr. thats freezzing! Wear some extra layers today!")
        elif 0 <= temp < 16:
            print("Quite chilly! Don't forget your coat today.")
        elif 16 <= temp < 23:
            print("It's pleasant today!")
        elif 23 <= temp < 32:
            print("It's quite warm, enjoy the weather today!")
        elif 32 <= temp < 40:
            print("It's very hot! Stay cool and hydrated.")
    except ValueError as e:
        print(f"Error: {e}")
main()


# Excersize 8
def ask_questions(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:
        question = item["question"]
        correct_answer = item["answer"]
        user_answer = input(f"{question} ").strip()

        if user_answer.lower() == correct_answer.lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": question, 
                "your_answer": user_answer,
                "correct_answer": correct_answer
            })

    return correct_answers, incorrect_answers, wrong_answers

def display_results(correct, incorrect, wrong_answers):
    print(f"You got {correct} correct answers and {incorrect} incorrect answers.")
    if incorrect > 0:
        print("Here are the questions you got incorrectly:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Correct_answer: {item['correct_answer']}")
            print(f"Your_answer: {item['your_answer']}")
            print()

def play_quiz():
    data = [{
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }]   

    while True:
        correct, incorrect, wrong_answers = ask_questions(data)  # Consistent function name
        display_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            play_again = input("You got more than 3 answers wrong. Would you like to play again? (yes/no) ").strip().lower()
            if play_again != 'yes':
                break
        else:
            break
play_quiz()            