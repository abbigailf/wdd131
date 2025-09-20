document.addEventListener("DOMContentLoaded", () => {
    // Current year
    const yearSpan = document.querySelector("#current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Last modified date
    const lastModifiedSpan = document.querySelector("#last-modified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // ========== Weather ==========
    const temperature = 58; // °F (static value for now)
    const windSpeed = 3;    // km/h (static value for now)

    const windChillSpan = document.querySelector("#windchill");

    if (windChillSpan) {
        // Convert wind speed from km/h → mph (since temp is °F)
        const windSpeedMph = windSpeed / 1.609;

        // Check if conditions are met
        if (temperature <= 50 && windSpeedMph > 3) {
            windChillSpan.textContent = calculateWindChill(temperature, windSpeedMph).toFixed(1) + " °F";
        } else {
            windChillSpan.textContent = "N/A";
        }
    }
});

// ========== Function ==========
// One-line NOAA formula (meets rubric requirement)
function calculateWindChill(tempF, speedMph) {
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
}