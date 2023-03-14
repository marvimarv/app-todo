const {DateTime} = require('Luxon')
const {Settings} = require('Luxon')
const express = require('express')
const { time } = require('console')
const cors = require('cors')
// Import des fetch Befehls (Übernommen aus der Dokumentation zum Paket Node-Fetch)
// Einbindung in "require"-Abschnitt
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express()
const port = 3000
app.use(cors({
origin: "*"
}))


app.get('/Personen', (req, res) => {

    const obj = [{
        "name": "Saqib",
        "age": 26
    },
{
    "name": "marvin",
    "age": 30,
}]
res.json(obj)
})


app.get('/Zeit', (req, res) => {
    Settings.defaultLocale = "de";
    const time = DateTime.now().toFormat("DDDD");
  
    const json = {
      "time": time
    };
    
    res.json(json);
  });
  
  app.get('/Wetter', async (req, res) => {
    // Abfrage der API (HTTP)
    const city = "Köln" // Anpassen für die eigene Stadt
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=776b460b44adc9ea588c24ec2458c1ef" + "&units=metric");
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    const data = await result.json()

    // Rückgabe der abgefragten Wetterdaten
    res.json(data)
})


    



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



