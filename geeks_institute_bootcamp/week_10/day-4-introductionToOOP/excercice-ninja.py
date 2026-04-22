class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        # Create the call record string
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        
        # Add to the caller's history 
        # (You could also add it to the receiver's history if you wanted a two-way record)
        self.call_history.append(call_record)

    def show_call_history(self):
        print(f"\n--- Call History for {self.phone_number} ---")
        if not self.call_history:
            print("No calls made.")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        # Create the message dictionary
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        
        # Save the message to BOTH phones so the receiver can see incoming messages
        self.messages.append(message)
        other_phone.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}.")

    def show_outgoing_messages(self):
        print(f"\n--- Outgoing Messages for {self.phone_number} ---")
        found = False
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To: {msg['to']} | Message: '{msg['content']}'")
                found = True
        if not found:
            print("No outgoing messages.")

    def show_incoming_messages(self):
        print(f"\n--- Incoming Messages for {self.phone_number} ---")
        found = False
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From: {msg['from']} | Message: '{msg['content']}'")
                found = True
        if not found:
            print("No incoming messages.")

    def show_messages_from(self, other_phone):
        print(f"\n--- Messages from {other_phone.phone_number} to {self.phone_number} ---")
        found = False
        for msg in self.messages:
            if msg["from"] == other_phone.phone_number and msg["to"] == self.phone_number:
                print(f"Message: '{msg['content']}'")
                found = True
        if not found:
            print("No messages found from this number.")

# Testing the Code

# 1. Instantiate three Phone objects
my_phone = Phone("555-0100")
moms_phone = Phone("555-0101")
dads_phone = Phone("555-0102")

# 2. Test making calls
print("--- Testing Calls ---")
my_phone.call(moms_phone)
my_phone.call(dads_phone)
my_phone.show_call_history()

# 3. Test sending messages
print("\n--- Testing Messages ---")
my_phone.send_message(moms_phone, "Hi Mom, what's for dinner?")
moms_phone.send_message(my_phone, "We are having spaghetti!")
my_phone.send_message(dads_phone, "Can you pick me up?")

# 4. Test viewing messages
my_phone.show_outgoing_messages()
my_phone.show_incoming_messages()

# 5. Test viewing messages from a specific person
my_phone.show_messages_from(moms_phone)