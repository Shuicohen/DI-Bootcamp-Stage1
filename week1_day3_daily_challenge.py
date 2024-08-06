# Challenge 1
word = input("Please enter a word: ")
letter_indices = {}
for index, letter in enumerate(word):
    if letter in letter_indices:
        letter_indices[letter].append(index)
    else:
        letter_indices[letter] = [index]
print(letter_indices)


# Challenge 2
def affordable_items(wallet, store_items):
    def clean_price(price):
        return float(price.replace("$", "").replace(",", ""))
    
    wallet_amount = clean_price(wallet)
    affordable = [item for item, price in store_items.items() if clean_price(price) <= wallet_amount]
    affordable.sort()
    return  affordable if affordable else ["Nothing!"]
store_items = {
    "Laptop": "$1,200",
    "Headphones": "$150",
    "Coffee Maker": "$80",
    "Book": "$15",
    "Smartphone": "$800",
    "Pen": "$2.50"
}

wallet = input("How much money do you have? ")
affordable_list = affordable_items(wallet, store_items)
print(affordable_list)