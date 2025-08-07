
document.addEventListener("DOMContentLoaded", function() {
    const botList = document.getElementById("botList");
    botList.innerHTML = "<p>Loading task bots...</p>";
    // Simulated data
    setTimeout(() => {
        botList.innerHTML = "<ul><li>Bot 1: Active</li><li>Bot 2: Idle</li></ul>";
    }, 1000);
});
