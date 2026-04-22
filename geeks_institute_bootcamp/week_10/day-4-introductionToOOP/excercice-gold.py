import math
import random

# Exercise 1: Geometry
class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def print_definition(self):
        print("A circle is a round plane figure whose boundary (the circumference) consists of points equidistant from a fixed point (the center).")

print("--- Exercise 1 ---")
my_circle = Circle(5.0)
print(f"Radius: {my_circle.radius}")
print(f"Perimeter: {my_circle.perimeter():.2f}")
print(f"Area: {my_circle.area():.2f}")
my_circle.print_definition()
print("\n")


# Exercise 2: Custom List Class
class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        # Slicing is a clean way to reverse a list in Python
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        # Using a list comprehension to generate random numbers 
        # based on the length of the original list
        return [random.randint(1, 100) for _ in range(len(self.letters))]

print("--- Exercise 2 ---")
letters_list = MyList(['z', 'a', 'x', 'b', 'm'])
print(f"Original: {letters_list.letters}")
print(f"Reversed: {letters_list.get_reversed()}")
print(f"Sorted: {letters_list.get_sorted()}")
print(f"Random Numbers (same length): {letters_list.generate_random_list()}")
print("\n")


# Exercise 3: Restaurant Menu Manager
# Note: Usually this would be saved in a separate file called `menu_manager.py`
class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten_index": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten_index": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten_index": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten_index": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten_index": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name, 
            "price": price, 
            "spice_level": spice, 
            "gluten_index": gluten
        }
        self.menu.append(new_dish)
        print(f"Added '{name}' to the menu.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"] == name:
                dish["price"] = price
                dish["spice_level"] = spice
                dish["gluten_index"] = gluten
                print(f"Successfully updated '{name}'.")
                return
        
        # If the loop finishes without finding the dish
        print(f"Notice: '{name}' is not currently on the menu.")

    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"] == name:
                self.menu.remove(dish)
                print(f"Removed '{name}' from the menu. Here is the updated menu:")
                for item in self.menu:
                    print(item)
                return
        
        # If the loop finishes without finding the dish
        print(f"Notice: '{name}' is not currently on the menu.")


print("--- Exercise 3 ---")
manager = MenuManager()

# Test adding an item
manager.add_item("Tacos", 12, "B", True)

# Test updating an existing item
manager.update_item("Soup", 12, "C", False)

# Test updating a non-existent item
manager.update_item("Pizza", 20, "A", True)

# Test removing an item
manager.remove_item("Salad")

# Test removing a non-existent item
manager.remove_item("Sushi")