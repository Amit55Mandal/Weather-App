async function getWeather() {
      const city = document.getElementById('city').value;
      const apiKey = 'feec6ec7549b27c57c3cbbeeea7ccd38'; // Replace with your OpenWeather API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          document.getElementById('weather').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        } else {
          document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
        }
      } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data</p>`;
      }
    }