
def handle_event(event_type, data):
    if event_type == "user_login":
        print(f"Login Event: {data}")
    elif event_type == "task_completed":
        print(f"Task Completed: {data}")
    elif event_type == "error":
        print(f"Error Logged: {data}")
    else:
        print(f"Unhandled Event [{event_type}]: {data}")
