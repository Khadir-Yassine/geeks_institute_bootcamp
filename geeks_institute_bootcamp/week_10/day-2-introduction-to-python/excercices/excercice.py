# ---  Exercise 1 : Hello World ---
print("Hello world\n" * 4)


# ---  Exercise 2 : Some Math ---
result = (99 ** 3) * 8
print(f"The result of (99³) × 8 is: {result}\n")


# ---  Exercise 3 : What’s your name ? ---
my_name = "Gemini"
user_name = input("What is your name? ")

if user_name.lower() == my_name.lower():
    print("No way, we have the same name! Are you an AI too?\n")
else:
    print(f"Nice to meet you, {user_name}! I'm {my_name}. I'm glad we don't have to share a name.\n")


# ---  Exercise 4 : Tall enough to ride a roller coaster ---
height = int(input("What is your height in centimeters? "))

if height > 145:
    print("You are tall enough to ride!\n")
else:
    print("You need to grow some more to ride.\n")


# ---  Exercise 5 : Favorite Numbers ---
my_fav_numbers = {7, 42, 99}
my_fav_numbers.add(10)
my_fav_numbers.add(15)
my_fav_numbers.remove(15) # Removing the "last" one added

friend_fav_numbers = {3, 8, 21}
our_fav_numbers = my_fav_numbers | friend_fav_numbers

print(f"Our combined favorite numbers are: {our_fav_numbers}\n")


# ---  Exercise 6: Tuple ---
# Question: Given a tuple which value is integers, is it possible to add more integers to the tuple?
# Answer in code: No, tuples are immutable. The following code would cause an error, so it is commented out.
# my_tuple = (1, 2, 3)
# my_tuple.append(4) # AttributeError: 'tuple' object has no attribute 'append'


# ---  Exercise 7: List ---
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")

apple_count = basket.count("Apples")
print(f"There are {apple_count} apples in the basket.")

basket.clear()
print(f"The basket is now empty: {basket}\n")


# ---  Exercise 8 : Sandwich Orders ---
sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
    "Pastrami sandwich"
]

# Remove all pastrami sandwiches
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

# Move orders to finished list
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)

# Print final messages
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")