import psycopg2
import os
from dotenv import load_dotenv
from menu_item import MenuItem
from menu_manager import MenuManager

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

def show_user_menu():
    print("Restaurant Menu Management")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("E - Exit")

    choice = input("Enter your choice: ").upper()

    if choice == 'V':
        view_item()
    elif choice == 'A':
        add_item_to_menu()
    elif choice == 'D':
        delete_item_from_menu()
    elif choice == 'U':
        update_item_from_menu()
    elif choice == 'S':
        show_restaurant_menu()
    elif choice == 'E':
        show_restaurant_menu()
        print("Exiting...")
        exit()
    else:
        print("Invalid choice. Please try again.")
        show_user_menu()

def view_item():
    name = input("Enter the name of the item to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Name: {item.name}, Price: {item.price}")
    else:
        print(f"No item found with the name '{name}'.")

def add_item_to_menu():
    name = input("Enter the name of the item: ")
    price = input("Enter the price of the item: ")
    item = MenuItem(name, price)
    item.save()

    print("Item added successfully.")

def delete_item_from_menu():
    name = input("Enter the name of the item: ")
    item = MenuItem(name, 0)
    item.delete()

    print("Item removed successfully.")

def update_item_from_menu():
    old_name = input("Enter the name of the item: ")
    new_name = input("Enter the new name of the item: ")
    new_price = input("Enter the new price of the item: ")
    item = MenuItem(old_name, 0)
    item.update(new_name, new_price)

    print("Item updated successfully.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("The menu is currently empty.")
    else:
        print("Restaurant Menu:")
        for item in items:
            print(f"Name: {item.name}, Price: {item.price}")

if __name__ == '__main__':
    while True:
        show_user_menu()