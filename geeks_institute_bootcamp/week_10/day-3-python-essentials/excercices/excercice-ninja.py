# --- Base Exercise ---
cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert string to a list using .split()
cars_list = cars_str.split(", ")

# Print how many manufacturers are in the list
print(f"There are {len(cars_list)} manufacturers in the list.")

# Print in descending order (Z-A)
# We use sorted() with reverse=True to not permanently change the original list
cars_descending = sorted(cars_list, reverse=True)
print(f"Manufacturers in descending order: {cars_descending}")

# Find manufacturers with 'o' using list comprehension
with_o = [car for car in cars_list if 'o' in car.lower()]
print(f"Manufacturers with 'o' in their name ({len(with_o)}): {with_o}")

# Find manufacturers without 'i' using list comprehension
without_i = [car for car in cars_list if 'i' not in car.lower()]
print(f"Manufacturers without 'i' in their name ({len(without_i)}): {without_i}\n")


# --- Bonus 1: Remove duplicates ---
dup_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Convert to a set to remove duplicates, then back to a list
unique_cars = list(set(dup_list))

# Print comma-separated string
unique_str = ", ".join(unique_cars)
print(f"Unique companies: {unique_str}")
print(f"There are now {len(unique_cars)} companies in the list.\n")


# --- Bonus 2: Ascending order, reversed letters ---
# Sort ascending (A-Z)
ascending_cars = sorted(unique_cars)

# Reverse the letters of each name using slicing [::-1]
reversed_letters_cars = [car[::-1] for car in ascending_cars]
print(f"Ascending order with reversed names: {reversed_letters_cars}")