
# CIMS Messaging Core

class CIMSMessage:
    def __init__(self, sender, recipient, channel, message):
        self.sender = sender
        self.recipient = recipient
        self.channel = channel  # e.g., 'WhatsApp', 'Email', 'CIMS'
        self.message = message

    def send(self):
        # Simulate sending a message
        print(f"Sending via {self.channel}: {self.message} to {self.recipient}")
        return True
