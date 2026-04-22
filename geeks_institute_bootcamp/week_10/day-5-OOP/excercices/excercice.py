import random

# ==========================================
# Exercise 1: Pets
# ==========================================
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [
    Bengal("Tigger", 3),
    Chartreux("Blue", 5),
    Siamese("Simon", 2)
]

sara_pets = Pets(all_cats)

print("--- Exercise 1: Pets ---")
sara_pets.walk()
print("\n")


# ==========================================
# Exercise 2: Dogs
# ==========================================
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_strength = self.run_speed() * self.weight
        other_strength = other_dog.run_speed() * other_dog.weight
        
        if my_strength > other_strength:
            return f"{self.name} won the fight!"
        elif other_strength > my_strength:
            return f"{other_dog.name} won the fight!"
        else:
            return "It was a tie!"

print("--- Exercise 2: Dogs ---")
dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Spot", 3, 20)
dog3 = Dog("Tank", 4, 45)

print(dog1.bark())
print(f"{dog3.name}'s run speed is {dog3.run_speed()}")
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print("\n")


# ==========================================
# Exercise 3: Dogs Domesticated
# ==========================================
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        # Initialize attributes from the parent class
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        # Extract names from the Dog instances passed in *args
        dog_names = [dog.name for dog in args]
        all_names = [self.name] + dog_names
        names_string = ", ".join(all_names)
        print(f"{names_string} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and just stares at you.")

print("--- Exercise 3: Dogs Domesticated ---")
pet_dog = PetDog("Buddy", 2, 15)

pet_dog.play(dog1, dog2) # Playing with dogs from Exercise 2
pet_dog.do_a_trick() # Fails because not trained
pet_dog.train()      # Trains the dog
pet_dog.do_a_trick() # Succeeds because trained
print("\n")


# ==========================================
# Exercise 4: Family
# ==========================================
class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family! Welcome to the world, {kwargs.get('name')}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False # Returns False if person is not found

    def family_presentation(self):
        print(f"--- The {self.last_name} Family ---")
        for member in self.members:
            print(member)

print("--- Exercise 4: Family ---")
initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

smith_family = Family("Smith", initial_members)
smith_family.family_presentation()
print(f"Is Michael over 18? {smith_family.is_18('Michael')}")
smith_family.born(name='Jimmy', age=0, gender='Male', is_child=True)
smith_family.family_presentation()
print("\n")


# ==========================================
# Exercise 5: TheIncredibles Family
# ==========================================
class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                if member['name'] == name:
                    print(f"{name}'s power is: {member['power']}")
        else:
            raise Exception(f"{name} is not over 18 years old and cannot use their power!")

    def incredible_presentation(self):
        print("*Here is our powerful family **")
        super().family_presentation()


print("--- Exercise 5: TheIncredibles Family ---")
incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles = TheIncredibles("Parr", incredible_members)

incredibles.incredible_presentation()
incredibles.use_power('Michael')

# Add Baby Jack
incredibles.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='JackJack')

incredibles.incredible_presentation()

# Trying to use Jack's power. Wrapped in try/except so the script doesn't crash!
try:
    print("\nAttempting to use Jack's power...")
    incredibles.use_power('Jack') 
except Exception as e:
    print(f"Exception Caught: {e}")