import random

# --- Exercises 1 & 2: Birthday Look-up (Advanced) ---
print("--- Exercises 1 & 2 ---")

# 1. Initialize the dictionary
birthdays = {
    "Alice": "1990/05/15",
    "Bob": "1985/11/20",
    "Charlie": "1992/08/08",
    "Diana": "1988/03/25",
    "Eve": "1995/12/01"
}

print("Welcome to the Birthday Dictionary!")
print("You can look up the birthdays of the people in the list!")

# 2. (Exercise 2) Print out all the names in the dictionary
# .keys() gets all the keys, and joining them makes it look clean
names_list = ", ".join(birthdays.keys())
print(f"Here are the people we know: {names_list}")

# 3. Ask the user for a name
search_name = input("Whose birthday do you want to look up? ")

# 4. Check if the name is in the dictionary and print the appropriate message
# Using .capitalize() ensures it matches our dictionary keys even if they type "alice"
formatted_name = search_name.capitalize()

if formatted_name in birthdays:
    print(f"{formatted_name}'s birthday is {birthdays[formatted_name]}.\n")
else:
    print(f"Sorry, we don’t have the birthday information for {search_name}.\n")


# ---  Exercise 3: Sum ---
print("--- Exercise 3 ---")

def sum_repeated(x):
    # Convert the integer to a string so we can multiply the characters
    str_x = str(x)
    
    # Create the sequence (e.g., "3", "33", "333", "3333") and turn them back into ints
    val1 = int(str_x)
    val2 = int(str_x * 2)
    val3 = int(str_x * 3)
    val4 = int(str_x * 4)
    
    # Return the sum
    return val1 + val2 + val3 + val4

# Test the function with X = 3
result = sum_repeated(3)
print(f"If X=3, the output of X+XX+XXX+XXXX is: {result}\n")


# ---  Exercise 4: Double Dice ---
print("--- Exercise 4 ---")

def throw_dice():
    """Simulates rolling a 6-sided die."""
    return random.randint(1, 6)

def throw_until_doubles():
    """Throws two dice until they match, returns the number of throws."""
    throws = 0
    while True:
        throws += 1 # Count this throw
        die1 = throw_dice()
        die2 = throw_dice()
        
        # If they match, break the loop and return the count
        if die1 == die2:
            return throws

def main_dice_simulation():
    """Simulates throwing for doubles 100 times."""
    # A list is the perfect collection here because we just need to 
    # store an ordered sequence of integers to do math on later.
    results = []
    
    # Throw until doubles 100 times
    for _ in range(100):
        results.append(throw_until_doubles())
        
    # Calculate the total and the average
    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)
    
    # Print the final report
    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

# Run the simulation
main_dice_simulation()