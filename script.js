// Options for the fetch requests
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f02272b689msh43c890bfc3b5700p1a4c21jsne1821754c24b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Function to fetch and display weather data for a specific city
const getWeather = (city) => {
    const cityName = document.getElementById('cityName'); // Updated to get element by ID

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Update DOM elements with weather data
            cityName.textContent = city; // Update city name in the header
            document.getElementById('temp').textContent = data.temp || '-';
            document.getElementById('temp2').textContent = data.temp || '-';
            document.getElementById('min_temp').textContent = data.min_temp || '-';
            document.getElementById('max_temp').textContent = data.max_temp || '-';
            document.getElementById('wind_speed').textContent = data.wind_speed || '-';
            document.getElementById('wind_speed2').textContent = data.wind_speed || '-';
            document.getElementById('wind_degrees').textContent = data.wind_degrees || '-';
            document.getElementById('humidity').textContent = data.humidity || '-';
            document.getElementById('humidity2').textContent = data.humidity || '-';
            document.getElementById('sunrise').textContent = data.sunrise || '-';
            document.getElementById('sunset').textContent = data.sunset || '-';
        })
        .catch(err => console.error('Error fetching weather data:', err));
};

// Function to fetch weather data for multiple cities and display in the table
const fetchAndDisplayWeather = () => {
    const cities = ['Haldwani', 'Nainital', 'Gurgaon', 'Almora', 'Seattle'];

    cities.forEach((city, index) => {
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                // Update table rows with weather data for each city
                const row = document.getElementById(`weather-${city.toLowerCase()}`); // Updated to get element by ID
                row.innerHTML = `
                    <td>${city}</td>
                    <td>${data.temp || '-'}</td>
                `;
            })
            .catch(err => console.error(`Error fetching weather data for ${city}:`, err));
    });
};

// Event listener for the search button
const submit = document.getElementById('submit'); // Added to get submit button by ID
const cityInput = document.getElementById('city'); // Added to get city input by ID

submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city); // Fetch weather data for the entered city
    }
});

// Initial display: Fetch weather data for default city (Delhi)
getWeather('Delhi');

// Initial display: Fetch weather data for five cities and display in the table
fetchAndDisplayWeather();
