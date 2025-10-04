document.addEventListener("DOMContentLoaded", () => {
    let storedCount = localStorage.getItem("reviewCount") || "0";
    let count = Number(storedCount);
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});