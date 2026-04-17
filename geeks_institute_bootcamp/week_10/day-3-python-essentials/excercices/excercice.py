import random

# ---  Exercise 1 : Convert lists into dictionaries ---
print("--- Exercise 1 ---")
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Zip combines the lists, dict() turns the pairs into key-value pairs
my_dict = dict(zip(keys, values))
print(f"Combined dictionary: {my_dict}\n")


# ---  Exercise 2 : Cinemax #2 ---
print("--- Exercise 2 ---")
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0

print("Family ticket costs:")
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
        
    print(f"{name.capitalize()} pays ${cost}")
    total_cost += cost

print(f"Total family cost: ${total_cost}\n")

# Bonus: Dynamic Input
print("--- Bonus: Build your own family ---")
custom_family = {}

while True:
    name_input = input("Enter family member's name (or type 'quit' to finish): ")
    if name_input.lower() == 'quit':
        break
    age_input = int(input(f"Enter {name_input}'s age: "))
    custom_family[name_input] = age_input

dynamic_total = 0
for name, age in custom_family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    dynamic_total += cost

print(f"The total cost for your custom family is: ${dynamic_total}\n")


# ---  Exercise 3: Zara ---
print("--- Exercise 3 ---")
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print(f"Zara creates clothes for {', '.join(brand['type_of_clothes'])}.")
brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]
print(f"Last competitor: {brand['international_competitors'][-1]}")
print(f"Major colors in US: {', '.join(brand['major_color']['US'])}")
print(f"Number of key-value pairs: {len(brand)}")
print(f"Keys in brand: {list(brand.keys())}")

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)
print(f"Number of stores is now: {brand['number_stores']} (It was overwritten by the new dictionary)\n")


# ---  Exercise 4 : Some Geography ---
print("--- Exercise 4 ---")
def describe_city(city, country="Iceland"):
    print(f"{city.capitalize()} is in {country.capitalize()}")

describe_city("Reykjavik")
describe_city("Paris", "France")
print()


# ---  Exercise 5 : Random ---
print("--- Exercise 5 ---")
def random_guesser(user_num):
    random_num = random.randint(1, 100)
    if user_num == random_num:
        print(f"Success! Both numbers were {user_num}.")
    else:
        print(f"Fail. You chose {user_num}, but the random number was {random_num}.")

random_guesser(42)
print()


# ---  Exercise 6 : Let’s create some personalized shirts ! ---
print("--- Exercise 6 ---")
def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is: '{text}'")

make_shirt() # Large, default text
make_shirt(size="Medium") # Medium, default text
make_shirt("Small", "Coding is fun!") # Custom size and text
make_shirt(text="Keyword arguments!", size="Extra Large") # Bonus: Keyword arguments out of order
print()


# ---  Exercise 7 : Temperature Advice ---
print("--- Exercise 7 ---")
def get_random_temp(season):
    # Bonus: Generate a floating-point number using uniform() instead of randint()
    if season == 'winter':
        return round(random.uniform(-10.0, 16.0), 1)
    elif season == 'spring':
        return round(random.uniform(5.0, 25.0), 1)
    elif season == 'summer':
        return round(random.uniform(20.0, 40.0), 1)
    elif season in ['autumn', 'fall']:
        return round(random.uniform(10.0, 23.0), 1)
    else:
        return round(random.uniform(-10.0, 40.0), 1)

def main_temp():
    # Bonus: Ask for the month and determine the season
    month_input = input("Enter the number of the month (1-12) to check the weather: ")
    
    try:
        month = int(month_input)
        if month in [12, 1, 2]:
            season = 'winter'
        elif month in [3, 4, 5]:
            season = 'spring'
        elif month in [6, 7, 8]:
            season = 'summer'
        elif month in [9, 10, 11]:
            season = 'autumn'
        else:
            print("Invalid month number.")
            return
    except ValueError:
        print("Please enter a valid number.")
        return

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.\n")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.\n")
    elif 16 <= temp < 24:
        print("It's a pleasant temperature!\n")
    elif 24 <= temp < 32:
        print("It's getting warm out there.\n")
    else:
        print("It's quite hot! Stay hydrated.\n")

main_temp()


# ---  Exercise 8 : Star Wars Quiz ---
print("--- Exercise 8 ---")
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz():
    while True:
        correct = 0
        incorrect = 0
        wrong_answers = []

        print("\n--- May the Force be with you ---")
        for item in data:
            user_ans = input(item["question"] + " ")
            if user_ans.lower() == item["answer"].lower():
                correct += 1
            else:
                incorrect += 1
                wrong_answers.append({
                    "question": item["question"],
                    "user_answer": user_ans,
                    "correct_answer": item["answer"]
                })
        
        print(f"\nYou got {correct} correct and {incorrect} incorrect.")
        
        # Bonus: Display what they got wrong
        if incorrect > 0:
            print("Here are the ones you missed:")
            for wrong in wrong_answers:
                print(f"- {wrong['question']}\n  Your answer: {wrong['user_answer']}\n  Correct answer: {wrong['correct_answer']}\n")
        
        # Ask to play again if they missed more than 3
        if incorrect > 3:
            play_again = input("You had more than 3 wrong answers. Do you want to try again? (yes/no): ")
            if play_again.lower() != 'yes':
                print("Thanks for playing!")
                break
        else:
            print("Great job! The Force is strong with you.")
            break

run_quiz()