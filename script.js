
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haldwani';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'f02272b689msh43c890bfc3b5700p1a4c21jsne1821754c24b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function showData() {
    console.log("Hey there")
    // Make API request
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Haldwani',options)
      .then(response => response.json())
      .then(data => {
        // Display API data in HTML
        const dataList = document.getElementById('data');
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.title;
          dataList.appendChild(li);
        });
      })
      .catch(error => console.log(error));
  }



const getWeather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=> response.json())
.then(response=>{
    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
})
.catch(err =>console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()    //to stop reload after search city 
    getWeather(city.value)
})


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Haldwani',options)
  .then(response => response.json())
  .then(data => {
    // render the weather data using HTML
    console.log(data)
    const weatherElement = document.getElementById('weather-haldwani')
    weatherElement.innerHTML = `
    <tbody>
        <tr>
            <th scope="row" class="text-start">Haldwani</th>
            <td>${data.cloud_pct}</td>
            <td>${data.temp}</td>
            <td>${data.feels_like}</td>
            <td>${data.humidity}</td>
            <td>${data.min_temp}</td>
            <td>${data.max_temp}</td>
            <td>${data.wind_speed}</td>
            <td>${data.wind_degrees}</</td>
            <td>${data.sunrise}</td>
            <td>${data.sunset}</td>
        </tr>
    </tbody>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Nainital',options)
  .then(response => response.json())
  .then(data => {
    // render the weather data using HTML
    console.log(data)
    const weatherElement = document.getElementById('weather-nainital')
    weatherElement.innerHTML = `
    <tbody>
        <tr>
            <th scope="row" class="text-start">Nainital</th>
            <td>${data.cloud_pct}</td>
            <td>${data.temp}</td>
            <td>${data.feels_like}</td>
            <td>${data.humidity}</td>
            <td>${data.min_temp}</td>
            <td>${data.max_temp}</td>
            <td>${data.wind_speed}</td>
            <td>${data.wind_degrees}</</td>
            <td>${data.sunrise}</td>
            <td>${data.sunset}</td>
        </tr>
    </tbody>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Gurgaon',options)
  .then(response => response.json())
  .then(data => {
    // render the weather data using HTML
    console.log(data)
    const weatherElement = document.getElementById('weather-gurgaon')
    weatherElement.innerHTML = `
    <tbody>
        <tr>
            <th scope="row" class="text-start">Gurgaon</th>
            <td>${data.cloud_pct}</td>
            <td>${data.temp}</td>
            <td>${data.feels_like}</td>
            <td>${data.humidity}</td>
            <td>${data.min_temp}</td>
            <td>${data.max_temp}</td>
            <td>${data.wind_speed}</td>
            <td>${data.wind_degrees}</</td>
            <td>${data.sunrise}</td>
            <td>${data.sunset}</td>
        </tr>
    </tbody>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Almora',options)
  .then(response => response.json())
  .then(data => {
    // render the weather data using HTML
    console.log(data)
    const weatherElement = document.getElementById('weather-almora')
    weatherElement.innerHTML = `
    <tbody>
        <tr>
            <th scope="row" class="text-start">Almora</th>
            <td>${data.cloud_pct}</td>
            <td>${data.temp}</td>
            <td>${data.feels_like}</td>
            <td>${data.humidity}</td>
            <td>${data.min_temp}</td>
            <td>${data.max_temp}</td>
            <td>${data.wind_speed}</td>
            <td>${data.wind_degrees}</</td>
            <td>${data.sunrise}</td>
            <td>${data.sunset}</td>
        </tr>
    </tbody>
    `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });



getWeather("Delhi")

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     cloud_pct.innerHTML = result.cloud_pct
//     temp.innerHTML = result.temp
//     feels_like.innerHTML = result.feels
//     humidity.innerHTML = result.humidity
//     min_temp.innerHTML = result.min_temp
//     max_temp.innerHTML = result.max_temp
//     wind_speed.innerHTML = result.wind_speed
//     wind_degrees.innerHTML = result.wind_degrees
//     sunrise.innerHTML = result.sunrise
//     sunset.innerHTML = result.sunset
    
// } catch (error) {
//     console.error(error);
// }