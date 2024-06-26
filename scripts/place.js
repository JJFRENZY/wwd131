document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("#year");
    const lastModifiedElement = document.getElementById('lastModifiedDate');
    const today = new Date();
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString();

    yearElement.innerHTML = `&copy; <span>${today.getFullYear()}</span> &#128051; Jack Eckersley &#128051; United States`;
    lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

    const temperatureElement = document.querySelector("#temperature");
    const windSpeedElement = document.querySelector("#windSpeed");
    const windChillElement = document.querySelector("#windChill");

    if (temperatureElement && windSpeedElement && windChillElement) {
        const temperatureValue = parseFloat(temperatureElement.textContent);
        const windSpeedValue = parseFloat(windSpeedElement.textContent);

        const calculateWindChill = (temperature, windSpeed) => {
            if (temperature > 10 || windSpeed <= 4.8) {
                return "N/A";
            }
            const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2); // Round to two decimal places
        };

        const windChillValue = calculateWindChill(temperatureValue, windSpeedValue);
        windChillElement.textContent = `${windChillValue} °C`;
    }
});
