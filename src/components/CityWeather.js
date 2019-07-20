import React from "react";

let iconurl = 'http://openweathermap.org/img/w/';
let imgext = '.png';

const capitalize = {
    textTransform: 'capitalize'
}

const CityWeather = props => (
	<div className="weather__info">
		<table>
			{
				props.icon && <tr className="weather__key"><td> Icon:</td>
					<td><img src={`${iconurl}${ props.icon }${imgext}`} alt="weather icon" className="weather_icon" /></td>
				</tr>
			}
			{	
				props.city && props.country && <p className="weather__key"> Location: 
					<span className="weather__value"> { props.city }, { props.country }</span>
				</p> 
			}
				<td>Temperature</td>
				<td>Humidity</td>
				<td>Conditions</td>
		
		</table>
     {/* {
         props.icon && <p className="weather__key"> Icon:
            <img src={`${iconurl}${ props.icon }${imgext}`} alt="weather icon" className="weather_icon" />
         </p>
     } */}
	
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { Math.round(props.temperature) }&#176;F</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity }% </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value" style={capitalize}> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default CityWeather;