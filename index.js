function updateTime() {
    const now = new Date();
    const utcTime = now;
    document.getElementById("currentTimeUTC").textContent = utcTime;
}
updateTime();
setInterval(updateTime, 1000);