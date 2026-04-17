import datetime
import calendar

# 1. Ask the user for their birthdate
birthdate_str = input("Please enter your birthdate (DD/MM/YYYY): ")

try:
    birthdate = datetime.datetime.strptime(birthdate_str, "%d/%m/%Y")
    today = datetime.date.today()
    
    # 2. Calculate the age
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    
    candles = age % 10
    
    # 3. Format the top line of the cake
    total_width = 11
    left_underscores = (total_width - candles) // 2
    right_underscores = total_width - candles - left_underscores
    
    top_line = ("_" * left_underscores) + ("i" * candles) + ("_" * right_underscores)
    
    cake = f"""
         {top_line}
        |:H:a:p:p:y:|
      __|___________|__
     |^^^^^^^^^^^^^^^^^|
     |:B:i:r:t:h:d:a:y:|
     |                 |
     ~~~~~~~~~~~~~~~~~~~
    """
    
    # 4. Check for a leap year
    is_leap = calendar.isleap(birthdate.year)
    
    # 5. Display the results
    print(f"\nYou are {age} years old!")
    
    if is_leap:
        print("Bonus: You were born in a leap year! You get TWO cakes!")
        print(cake)
        print(cake)
    else:
        print("Here is your cake!")
        print(cake)

except ValueError:
    print("Oops! Please make sure you use the exact format DD/MM/YYYY (e.g., 25/12/1990).")