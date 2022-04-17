import React, { useEffect } from "react";

const WeatherResults = (props) => {
    const { temp, conditions } = props.data.data
    useEffect(() => {
        console.log(props)
    }, [props])
    if(!temp) {
        return null
    }
    return (
        <>
        <h2>City: {props.data.loc}</h2>
        {/* <img src={current.weather_icons[0]} /> */}
        <h2>Weather: {conditions}</h2>
        <h2>Temperature: {temp} degrees</h2>
        </>
    )
}

export default WeatherResults