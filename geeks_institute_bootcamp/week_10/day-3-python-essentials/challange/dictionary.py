# 1. Ask the user for a word
user_word = input("Enter a word: ")

# 2. Create an empty dictionary to store our results
letter_indexes = {}

# 3. Loop through the word, getting both the index and the letter
for index, letter in enumerate(user_word):
    
    # If the letter is already in our dictionary, add the new index to its list
    if letter in letter_indexes:
        letter_indexes[letter].append(index)
        
    # If this is the first time we are seeing this letter, create a new list for it
    else:
        letter_indexes[letter] = [index]

# 4. Print the final dictionary
print(f'"{user_word}" ➞ {letter_indexes}')