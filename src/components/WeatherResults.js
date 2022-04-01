import React, { useEffect } from "react";

const WeatherResults = (props) => {
    const { location, current } = props.data
    useEffect(() => {
        console.log(props)
    }, [props])
    if(!location) {
        return null
    }
    return (
        <>
        <h2>City: {location.name}</h2>
        <img src={current.weather_icons[0]} />
        <h2>Temperature: {current.temperature * 9 / 5 + 32} degrees</h2>
        </>
    )
}

export default WeatherResults