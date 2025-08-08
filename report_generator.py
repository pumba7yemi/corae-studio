
import datetime

def generate_report(data, report_type="summary"):
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    report = f"Report generated on {timestamp}\n\n"
    if report_type == "summary":
        report += f"Summary: {data.get('summary', 'No summary provided.')}\n"
    elif report_type == "detailed":
        for key, value in data.items():
            report += f"{key}: {value}\n"
    return report
