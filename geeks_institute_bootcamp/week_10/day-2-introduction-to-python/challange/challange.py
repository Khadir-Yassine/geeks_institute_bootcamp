# --- Challenge 1: Multiples ---
print("--- Challenge 1 ---")

# Get inputs and convert them to integers
number = int(input("Enter a number: "))
length = int(input("Enter a length: "))

# Create an empty list to store our results
multiples = []

# Loop from 1 up to the exact length the user requested
for i in range(1, length + 1):
    multiples.append(number * i)

# Print the formatted result
print(f"number: {number} - length {length} ➞ {multiples}\n")


# --- Challenge 2: Remove Consecutive Duplicates ---
print("--- Challenge 2 ---")

user_word = input("Enter a word: ")

# We need to make sure the user actually typed something before proceeding
if len(user_word) > 0:
    # Start our new string with the very first letter of the user's word
    new_string = user_word[0]
    
    # Loop through the rest of the word starting from the second letter (index 1)
    for i in range(1, len(user_word)):
        # If the current letter is NOT equal to the previous letter, add it
        if user_word[i] != user_word[i-1]:
            new_string += user_word[i]
            
    # Print the formatted result
    print(f'user\'s word : "{user_word}" ➞ "{new_string}"')
else:
    print("You entered an empty string!")