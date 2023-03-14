
const newTemp = document.querySelector(".temperature");
const timeToday = document.querySelector(".time");
document.querySelector(".city").innerText = "Köln";

const getWeather = async () => {
    const result = await fetch("http://localhost:3000/Wetter");
// Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
const data = await result.json()
console.log(result);
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
