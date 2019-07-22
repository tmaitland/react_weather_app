import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import FiveDayForecast from './FiveDayForecast';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const height = {
    height: '75vh'
}

const center = {
    textAlign: 'center'
}

const centerBtn = {
    textAlign: 'center',
    display: 'block',
    margin: 'auto'
}

const formStyle = {
	display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const noUnderline = {
    textDecoration: 'none'
}

const APPID = '9347522dfc18eb6dc577618e6c9e8db1';
// let cityName = `Accra`;

class HourlyForeCast extends React.Component {
    

    //    state = {
    //         city: undefined,
    //         country: undefined,
    //         day: new Array(),
    //         minTemp: new Array(),
    //         maxTemp: new Array(),
    //         icon: new Array(),
    //         humidity: new Array(),
    //         error: undefined
    //       }
        // this.getWeather();

    // getWeather = async (event) => {
    //     event.preventDefault();
    //     const city = event.target.elements.city.value;
    //     const country = event.target.elements.country.value;
    //     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APPID}&units=imperial`);
    //     const data = await api_call.json();
    //     let day = this.state.day;
    //     let minTemp = this.state.minTemp;
    //     let maxTemp = this.state.maxTemp;
    //     let icon = this.state.icon;
    //     let humidity = this.state.humidity;

    //     if (city && country) {
    //         this.setState({
    //           city: city,
    //           country: country,
    //           error: ""
    //         });
    //         for (let i=0; i < data.list.length; i++ ) {
    //             day.push(data.list[i].dt_txt);
    //             minTemp.push(Math.floor(data.list[i].main.temp_min));
    //             maxTemp.push(Math.floor(data.list[i].main.temp_max));
    //             icon.push(data.list[i].weather[0].icon);
    //             humidity.push(data.list[i].main.humidity);
    //         }
    //     } else {
    //       this.setState({
    //         city: undefined,
    //         country: undefined,
    //         day: undefined,
    //         minTemp: undefined,
    //         maxTemp: undefined,
    //         icon: undefined,
    //         humidity: undefined,
    //         error: "Please enter the values."
    //       });
         
    //     }
    //     // console.log(day.length);
    //   }

      render() {
        //   let fivedays = [];
        //   let iconurl = 'http://openweathermap.org/img/w/';
        //   let imgext = '.png';
        //   let limitNum = this.state.day.length / 5;

        // for (let i=0; i < this.state.day.length; i = i + limitNum) {
        //     let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //     let eachDay = this.state.day[i];
        //     let thatDay = new Date(eachDay);
        //     let weekDay = thatDay.getDay();
        //     if(eachDay) {
            
        //     fivedays.push(
        //     <div className="weatherCard">
        //         <h3>{weekDays[weekDay]}</h3>
        //         <div className="holdIcon">
        //             <img src={`${iconurl}${this.state.icon[i]}${imgext}`} alt="weather icon" />
        //         </div>
        //         <div className="tempHighLow">
        //             <span className="temp">{this.state.minTemp[i]}&#176;F</span>
        //             <span className="temp">{this.state.maxTemp[i]}&#176;F</span>
        //         </div>    
        //     </div>
        //     );
        //      console.log(weekDay)
        //     }
        //     else if (limitNum === undefined) {
        //         fivedays.push(<h3>{this.state.error}</h3>)
        //     }
        //  }
          return (
              <div className="section" style={height}>
                  <div className="container">
                        <h1 style={center}>Hourly Forecast</h1>
                        {/* <div style={formStyle}><Form getWeather={this.getWeather}/></div> */}
                        <div className="holdWeekDay">
                           Sunday
                        </div>
                        <Link to="/" style={noUnderline}><button className="getForecasts" style={centerBtn}>Go Back</button></Link>
                       
                      
                  </div>
              </div>
          );
      }
    
  
}

export default HourlyForeCast;