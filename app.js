const URL = "https://api.openweathermap.org/data/2.5/";
const API_KEYS = "fa4e4a9a7f5aaa3885da17aad7c5e143";



// Funtion som kollar på enter tryckning från användaren
const setQery = (e) => {
     if(e.keyCode == '13')
     getResult(searchBar.value)
}


const getResult = (cityName) => {
    // färdig api länk som vi kan använda på fetch 
   let query = `${URL}weather?q=${cityName}&appid=${API_KEYS}&units=metric&lang=sv`;

   fetch(query)
   .then(weather => {
       return weather.json()
   })
   .then(result)
   searchBar.value.trim()
}

const result = (result) => {
    // let icon1 = result.weather[0].icon;
    // let icon = document.querySelector('.img')
    // icon.innerHTML = `<img src="icons/${icon1}.png"/>`

    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    const temp = document.querySelector('.temp')
    // använder round functionen från math biblotek för att avrunda grader
    temp.innerText = `${Math.round(result.main.temp)}°`

    const desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`

    const minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°/ ${Math.round(result.main.temp_max)}°`

    searchBar.value = "";
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQery)