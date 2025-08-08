
import schedule
import time

def scheduled_task():
    print("Scheduled task executed.")

schedule.every().day.at("10:00").do(scheduled_task)

if __name__ == "__main__":
    while True:
        schedule.run_pending()
        time.sleep(1)
