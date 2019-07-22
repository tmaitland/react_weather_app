import React from "react";


const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" className="cityCountry" placeholder="City..."/>
		<input type="text" name="country" className="cityCountry" placeholder="Country..."/>
		<button className="getWeather">Get Weather</button>
	</form>
);

export default Form;