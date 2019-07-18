const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '9347522dfc18eb6dc577618e6c9e8db1',
        units: "imperial"
    }
);

helper.getCurrentWeatherByCityName("Accra", (err, currentWeather) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(currentWeather);
    }
});