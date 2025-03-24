function updateTime() {
    const now = new Date();
    const utcTime = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    document.getElementById("currentTimeUTC").textContent = utcTime;
}
updateTime();
setInterval(updateTime, 1000);