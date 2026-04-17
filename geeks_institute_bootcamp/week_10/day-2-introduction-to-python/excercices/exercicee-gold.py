import random

# --- Exercise 1: What is the Season? ---
print("--- Exercise 1 ---")
# Get input and convert to integer
month = int(input("Enter a month number (1 to 12): "))

# Check which list the month belongs to using the 'in' keyword
if month in [3, 4, 5]:
    print("Season: Spring\n")
elif month in [6, 7, 8]:
    print("Season: Summer\n")
elif month in [9, 10, 11]:
    print("Season: Autumn\n")
elif month in [12, 1, 2]:
    print("Season: Winter\n")
else:
    print("Invalid month number.\n")


# --- Exercise 2: For Loop ---
print("--- Exercise 2 ---")
# Print numbers 1 to 20 (inclusive)
print("Numbers 1 to 20:")
for i in range(1, 21):
    print(i, end=" ") # end=" " prints them on the same line
print("\n")

# Print elements with an even index
print("Elements from 1 to 20 with an even index:")
numbers_list = list(range(1, 21))
# enumerate() gives us both the index and the value at that index
for index, number in enumerate(numbers_list):
    if index % 2 == 0:
        print(number, end=" ")
print("\n\n")


# --- Exercise 3: While Loop ---
print("--- Exercise 3 ---")
my_name = "Gemini"
user_guess = ""

# Keep looping as long as the guess does NOT equal my_name
while user_guess.lower() != my_name.lower():
    user_guess = input("Try to guess my name: ")
    
print("You got it!\n")


# --- Exercise 4: Check the index ---
print("--- Exercise 4 ---")
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
search_name = input("Enter a character's name: ")

# Check if name exists in the list to avoid an error
if search_name in names:
    # .index() returns the first occurrence of the item
    print(f"Index: {names.index(search_name)}\n")
else:
    print("That name is not in the list.\n")


# --- Exercise 5: Greatest Number ---
print("--- Exercise 5 ---")
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

# max() is a handy built-in Python function that finds the highest value
greatest = max(num1, num2, num3)
print(f"The greatest number is: {greatest}\n")


# --- Exercise 6: Random number (with bonuses) ---
print("--- Exercise 6 ---")
wins = 0
losses = 0

# A while True loop runs forever until it hits a 'break' statement
while True:
    user_play = input("Guess a number from 1 to 9 (or type 'quit' to exit): ")
    
    # Check if they want to exit
    if user_play.lower() == 'quit':
        break
        
    # Check if the input is actually a valid number
    if user_play.isdigit() and 1 <= int(user_play) <= 9:
        guess = int(user_play)
        actual_number = random.randint(1, 9)
        
        if guess == actual_number:
            print("Winner!\n")
            wins += 1
        else:
            print(f"Better luck next time. The number was {actual_number}.\n")
            losses += 1
    else:
        print("Please enter a valid number between 1 and 9.\n")

# These print when the loop is finally broken
print("--- Game Over ---")
print(f"Total games won: {wins}")
print(f"Total games lost: {losses}")