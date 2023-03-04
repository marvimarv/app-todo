const city = "Köln" // Anpassen für die eigene Stadt
const newTemp = document.querySelector(".temperature");
const timeToday = document.querySelector(".time");
document.querySelector(".city").innerText = city;

const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=776b460b44adc9ea588c24ec2458c1ef&units=metric`);
    const data = await response.json();
    console.log(data);
    const temperature = getTemperature(data);
    console.log(temperature);
    newTemp.innerText = temperature.toLocaleString('DE-de');
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    console.log(dateTime);
    timeToday.innerText = dateTime.toLocaleString('DE-de');
    //document.querySelector(".temperature").innerText = temperature;
}
window.onload = (event) => {
    console.log(event);
    getWeather();
}

setInterval(getWeather, 10000);

function getTemperature(data){
    console.log(data.main.feels_like);
    return data.main.feels_like;
}
