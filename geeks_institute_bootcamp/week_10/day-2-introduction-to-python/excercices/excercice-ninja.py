import string

# ---  Exercise 1 : Outputs ---
print("--- Exercise 1: Proof of Outputs ---")
print(f"3 <= 3 < 9 evaluates to: {3 <= 3 < 9}")
print(f"3 == 3 == 3 evaluates to: {3 == 3 == 3}")
print(f"bool(0) evaluates to: {bool(0)}")
print(f"bool(5 == '5') evaluates to: {bool(5 == '5')}")
print(f"bool(4 == 4) == bool('4' == '4') evaluates to: {bool(4 == 4) == bool('4' == '4')}")
print(f"bool(bool(None)) evaluates to: {bool(bool(None))}")

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)
print("\n")


# ---  Exercise 2 : Longest word without a specific character ---
print("--- Exercise 2: The 'No A' Game ---")
longest_length = 0

while True:
    user_sentence = input("Enter the longest sentence you can without the letter 'A' (or type 'quit' to exit): ")
    
    if user_sentence.lower() == 'quit':
        break
        
    # Check if 'a' or 'A' is in the sentence
    if 'a' in user_sentence.lower():
        print("Oops! You used the letter 'A'. Try again!\n")
    else:
        current_length = len(user_sentence)
        if current_length > longest_length:
            longest_length = current_length
            print(f"Congratulations! New record set! Your sentence is {longest_length} characters long.\n")
        else:
            print(f"Good job, but your record is still {longest_length} characters. Keep trying!\n")


# ---  Exercise 3: Working on a paragraph ---
print("\n--- Exercise 3: Text Analysis ---")
# An interesting, fun fact paragraph!
paragraph = "Python is an amazing programming language! It is versatile, easy to learn, and powerful. Did you know it was actually named after the comedy group Monty Python's Flying Circus? Now you know."
print(f"Text to analyze: '{paragraph}'\n")

# 1. Total characters
total_chars = len(paragraph)

# 2. Sentences (counting basic punctuation terminators)
sentence_count = paragraph.count('.') + paragraph.count('!') + paragraph.count('?')

# 3. Total words (stripping punctuation and lowercasing for accurate counting)
clean_text = paragraph.translate(str.maketrans('', '', string.punctuation)).lower()
words_list = clean_text.split()
total_words = len(words_list)

# 4. Unique words
unique_words = set(words_list)
unique_word_count = len(unique_words)

# Bonuses
non_whitespace_chars = len(paragraph.replace(" ", "").replace("\n", ""))
avg_words_per_sentence = total_words / sentence_count if sentence_count > 0 else 0
non_unique_words = total_words - unique_word_count

# Printing the analysis
print(f"Characters: {total_chars}")
print(f"Sentences: {sentence_count}")
print(f"Total Words: {total_words}")
print(f"Unique Words: {unique_word_count}")

print("\n--- Bonuses ---")
print(f"Non-whitespace characters: {non_whitespace_chars}")
# Using round() to keep the decimal readable
print(f"Average words per sentence: {round(avg_words_per_sentence, 2)}")
print(f"Non-unique words: {non_unique_words}")