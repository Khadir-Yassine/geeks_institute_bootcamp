# ==========================================
# Part I & Part III: BankAccount Class
# ==========================================
class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.authenticated = False
        self.balance = balance

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        return False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to deposit.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Deposit amount must be a positive number.")
        
        self.balance += amount
        print(f"Deposited {amount}. New balance is {self.balance}.")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to withdraw.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive number.")
        
        if self.balance >= amount:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance is {self.balance}.")
        else:
            raise Exception("Insufficient funds.")

# ==========================================
# Part II: MinimumBalanceAccount Class
# ==========================================
class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        # Call the parent class __init__ to set up username, password, and balance
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required to withdraw.")
        if not isinstance(amount, (int, float)) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive number.")
        
        # Check if the remaining balance will be at least the minimum_balance
        if (self.balance - amount) >= self.minimum_balance:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance is {self.balance}.")
        else:
            raise Exception(f"Cannot withdraw {amount}. Balance cannot drop below the minimum of {self.minimum_balance}.")


# ==========================================
# Part IV: BONUS - ATM Class
# ==========================================
class ATM:
    def __init__(self, account_list, try_limit):
        # Validate account list
        for account in account_list:
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):
                raise Exception("Invalid account in list. Must be a BankAccount or MinimumBalanceAccount.")
        self.account_list = account_list

        # Validate try limit
        try:
            if not isinstance(try_limit, int) or try_limit <= 0:
                raise ValueError("try_limit must be a positive integer.")
            self.try_limit = try_limit
        except ValueError as e:
            print(f"Error: {e} Defaulting try_limit to 2.")
            self.try_limit = 2

        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- Main Menu ---")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option (1 or 2): ")

            if choice == '1':
                username = input("Username: ")
                password = input("Password: ")
                # If log in is successful or max tries are reached, this might break out
                self.log_in(username, password)
            elif choice == '2':
                print("Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")

    def log_in(self, username, password):
        while self.current_tries < self.try_limit:
            # Check credentials against all accounts
            for account in self.account_list:
                if account.authenticate(username, password):
                    print(f"\nWelcome, {username}!")
                    self.current_tries = 0  # Reset tries upon successful login
                    self.show_account_menu(account)
                    return # Go back to main menu when done with the account

            # If loop finishes without returning, login failed
            self.current_tries += 1
            print("Invalid username or password.")
            
            if self.current_tries < self.try_limit:
                print(f"You have {self.try_limit - self.current_tries} tries left.")
                username = input("Username: ")
                password = input("Password: ")
            else:
                print("Max tries reached. Shutting down program.")
                exit() # Immediately shuts down the entire program

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Log out (Exit)")
            choice = input("Select an option: ")

            if choice == '1':
                try:
                    amount = float(input("Enter amount to deposit: "))
                    account.deposit(amount)
                except ValueError:
                    print("Please enter a valid number.")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == '2':
                try:
                    amount = float(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                except ValueError:
                    print("Please enter a valid number.")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == '3':
                print("Logging out...")
                account.authenticated = False # Log the user out safely
                break
            else:
                print("Invalid option. Please try again.")


# ==========================================
# Testing the Code
# ==========================================
if __name__ == "__main__":
    # 1. Create some accounts
    acc1 = BankAccount("john_doe", "password123", balance=500)
    acc2 = MinimumBalanceAccount("jane_doe", "securepass", balance=1000, minimum_balance=200)

    # 2. Add them to a list
    my_accounts = [acc1, acc2]

    # 3. Initialize the ATM (this will automatically launch the console menu)
    print("Starting ATM simulation...")
    # Note: Try passing an invalid try_limit like -5 to see the Exception handling work!
    my_atm = ATM(my_accounts, try_limit=3)