
import datetime

def generate_usage_report(data):
    report = f"Usage Report - {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
    for entry in data:
        report += f"{entry['user']} - {entry['action']} - {entry['timestamp']}\n"
    return report
