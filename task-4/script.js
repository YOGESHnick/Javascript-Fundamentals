async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    // Step 1: Get coordinates from city name
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      alert("City not found. Please try again.");
      return;
    }

    const { lat, lon } = geoData[0];

    // Step 2: Get weather data using coordinates
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await weatherResponse.json();

    // Display weather details
    document.getElementById("weather").innerHTML = `
            <h3>${weatherData.name}, ${weatherData.sys.country}</h3>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Condition: ${weatherData.weather[0].description}</p>
        `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to get weather. Please try again later.");
  }
}
