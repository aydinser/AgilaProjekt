const API_KEYS2 = "fa4e4a9a7f5aaa3885da17aad7c5e143";
const icon = document.getElementById('.icon');


const geoMessage = "Aktivera position tjänsten för din webläsare"

const locationbutton = document.getElementById('locationbutton');
locationbutton.addEventListener('click', ()=>{
    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }else{
        alert('Aktivera position')
    }
});

function onSuccess(position){
    const {latitude ,longitude} = position.coords;
    const URL2 = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYS2}&units=metric&lang=sv`
    console.log(URL2)
    fetch(URL2)
   .then(response => response.json()).then(result);
}

function onError(error){
    const desc = document.querySelector('.desc')
    desc.innerText = error.message;
    desc.classList.add("error")
}

