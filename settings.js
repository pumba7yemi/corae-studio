
document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const theme = document.getElementById("theme").value;
    const notifications = document.getElementById("notifications").checked;
    console.log("Saved Settings:", { theme, notifications });
    alert("Settings saved successfully!");
});
