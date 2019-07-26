import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import CityWeather from './CityWeather';


const APPID = '';
// let cityName = `Accra`;

class CurrentWeather extends React.Component {
    
       state = {
            icon: undefined,
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
          }
        // this.getWeather();

    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APPID}&units=imperial`);
        const data = await api_call.json();
        

        if (city && country) {
          this.setState({
            icon: data.weather[0].icon,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            icon: undefined,
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values."
          });
         
        }
        console.log(`${data.weather}`);
      }

      render() {
          return (
              <div className="section">
                  <div className="container">
                        <Form getWeather={this.getWeather}/>
                        <CityWeather
                            icon={this.state.icon}
                            temperature={this.state.temperature} 
                            humidity={this.state.humidity}
                            city={this.state.city}
                            country={this.state.country}
                            description={this.state.description}
                            error={this.state.error}
                        />
                       
                      
                  </div>
              </div>
          );
      }
    
    // helper.getCurrentWeatherByCityName(cityName, (err, currentWeather) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(currentWeather)
    //         console.log(currentWeather.weather[0].main, currentWeather.sys.country);
    //     }
    // });
}

export default CurrentWeather;
