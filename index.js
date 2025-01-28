function updateTime() {
    const now = new Date();
    const utcTime = now.toISOString();
    document.getElementById("currentTimeUTC").textContent = utcTime;
}

// Update time immediately on load
updateTime();

// Optional: Update every second
setInterval(updateTime, 1000);