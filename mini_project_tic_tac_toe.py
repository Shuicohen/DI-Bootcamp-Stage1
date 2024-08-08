def display_board(board):
    print(f"\n {board[0]} | {board[1]} | {board[2]}")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]}")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]}\n")


def player_input(player): 
    while True:
        try:
            position = int(input(f"Player {player}, enter a number between 1 and 9: "))
            if position < 1 or position > 9:
                print("Invalid input. Please enter a number between 1 and 9.")
            else:
                return position - 1    
        except ValueError:
            print("Invalid input. Please enter a number.")


def check_win(board, mark):
     win_conditions = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], # horizontal
         [0, 3, 6], [1, 4, 7], [2, 5, 8], # vertical
         [0, 4, 8], [2, 4, 6] # diagonal
     ]           
     return any(all(board[i] == mark for i in condition) for condition in win_conditions)


def check_tie(board):
    return all(space != ' ' for space in board)


def play():
    board = [" "] * 9
    current_player = "X"

    while True:
        display_board(board)
        move = player_input(current_player)
        if board[move] == " ":
            board[move] = current_player
        else:
            print("That spot is already taken. Please choose another one.")
            continue

        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break
        current_player = "O" if current_player == "X" else "X"


play()        
