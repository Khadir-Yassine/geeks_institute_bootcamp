
# Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# 1. Instantiate three Cat objects
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Garfield", 7)
cat3 = Cat("Tom", 5)

# 2. Function to find the oldest cat
def find_oldest_cat(*cats):
    oldest = cats[0] # Assume the first cat is the oldest to start
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

# 3. Print the formatted string using the function
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print("--- Exercise 1 ---")
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.\n")

# Exercise 2: Dogs

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")

print("--- Exercise 2 ---")
# David's Dog
davids_dog = Dog("Rex", 50)
print(f"David's dog is {davids_dog.name} and is {davids_dog.height}cm tall.")
davids_dog.bark()
davids_dog.jump()

# Sarah's Dog
sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is {sarahs_dog.name} and is {sarahs_dog.height}cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

# Check which dog is bigger
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}\n")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}\n")
else:
    print("Both dogs are the exact same height.\n")


# Exercise 3: Who’s the song producer?

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

print("--- Exercise 3 ---")
# Create the object and call the method
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold", 
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()
print("\n")


# Exercise 4: Afternoon at the Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"Added {new_animal} to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        print(f"Animals currently in {self.name}: {self.animals}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"Sold {animal_sold}.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        grouped_animals = {}
        
        for animal in self.animals:
            first_letter = animal[0].upper()
            
            if first_letter not in grouped_animals:
                # If it's the first animal for this letter, keep it as a string
                grouped_animals[first_letter] = animal
            else:
                # If there's already an entry, ensure it's a list and append
                if isinstance(grouped_animals[first_letter], str):
                    grouped_animals[first_letter] = [grouped_animals[first_letter], animal]
                else:
                    grouped_animals[first_letter].append(animal)
                    
        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()
        print("\nAnimals grouped by first letter:")
        for key, value in groups.items():
            print(f"{key}: {value}")

print("--- Exercise 4 ---")
# Create the object
new_york_zoo = Zoo("New York Zoo")

# Call all the methods to simulate the zoo workflow
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

# Try adding a duplicate
new_york_zoo.add_animal("Bear") 

new_york_zoo.get_animals()

new_york_zoo.sell_animal("Giraffe")

new_york_zoo.get_groups()