from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('sowpods.txt')

    while True:
        print("\n---Anagram Checker---")
        user_input = input("Enter a word or type 'exit' to quit: ")

        if user_input.lower() == 'exit':
            print("Goodbye!")
            break

        if ' ' in user_input or not user_input.isalpha():
            print("Error: Please enter a single alphabetic word.")
            continue

        if not checker.is_valid_word(user_input):
            print(f"'{user_input}' is not a valid English word.")
            continue

        anagrams = checker.get_anagrams(user_input)
        print(f"\nYOUR WORD: {user_input.upper()}")
        print("This is a valid English word.")
        print(f"Anagrams for your word: {', '.join(anagrams) if anagrams else 'None'}")

if __name__ == '__main__':
    main()