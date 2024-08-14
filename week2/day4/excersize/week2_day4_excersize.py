# Excersize 1
import random

def get_words_from_file(file_path):
    # REad the file and return a list of words
    with open(file_path, 'r') as file:
        words = file.read().splitlines() # Splitting by lines to create a list
        return words
    
def get_random_sentence(length):
    # Generate a random sentence with the specified number of words
    words = get_words_from_file('sowpods.txt')
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words)
    return sentence

def main():
    # Main function to interact with the user and generate a random sentence.
    print("Welcome to the Random Sentence Generator!")
    try:
        length = int(input("How long do you want the sentence to be? (Enter an integer between 2 and 20): "))
        if length < 2 or length > 20:
            print("Invalid input. Please enter an integer between 2 and 20.")
            return
    except ValueError:
        print("Error: Please enter a valid integer.")
        return
    
    sentence = get_random_sentence(length)
    print(f"Here's your random sentence: {sentence}")

# Call the main function
if __name__ == '__main__':
    main()


# Excersize 2
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Write a Python program to parse the given JSON file and extract the salary.
data = json.loads(sampleJson)
salary = data['company']['employee']['payable']['salary']
print(f"Salary: {salary}")

# Add a new key "birth_date" between "name" and "payable"
employee_data = data["company"]["employee"]
employee_data_with_birth_date = {
    "name": employee_data["name"],
    "birth_date": "1990-01-01",  # Example birth date
    "payable": employee_data["payable"]
}

# Update the main dictionary
data["company"]["employee"] = employee_data_with_birth_date

# Save the updated dictionary as JSON to a file
with open('updated_data.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Updated JSON has been saved to 'updated_data.json'.")