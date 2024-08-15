from game import Game

def get_user_menu_choice():
    print("\n---Menu---")
    print("g. Play a new game")
    print("x. Show scores and exit")

    while True:
        choice = input("Enter your choice: ").strip().lower()
        if choice in ["g", "x"]:
            return choice
        print("Invalid choice. Please select 'g' to play a new game or 'x' to show scores and exit.")

def print_results(results):
    print("\n---Game Results---")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    while True:
        choice = get_user_menu_choice()

        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "x":
            print_results(results)
            break

if __name__ == "__main__":
    main()