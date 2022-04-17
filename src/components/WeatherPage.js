import React, { useState } from "react";
import axios from "axios";
import WeatherResults from "./WeatherResults";


const initialForm = {
    city: ''
}

const initialSearch = {
    data: {},
    loc: ''
}

const WeatherPage = () => {
    const [form, setForm] = useState(initialForm)
    const [search, setSearch] = useState(initialSearch)
    // const { push } = useHistory()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    
    

    const handleSubmit = e => {
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
              aggregateHours: '24',
              location: form.city,
              contentType: 'json',
              unitGroup: 'us',
              shortColumnNames: '0'
            },
            headers: {
              'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
              'X-RapidAPI-Key': '721b80d954msh624c72d46d2a41ep1254c9jsne2a04a23f3fd'
            }
          };
          axios.request(options).then(function (response) {
            console.log(response.data);
            setSearch({
                data: response.data.locations[form.city].values[0],
                loc: response.data.locations[form.city].address
            })

        }).catch(function (error) {
            console.error(error);
        });
          
        // const apiKey = '8b0e59e8ca006a1bde99173dd339a78f'
        // axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${form.city}/`)
        //     .then(resp => {
        //         console.log(resp.data)
        //         setSearch(resp.data)
        //     })
        //     .catch(() => {
                
        //     })
    }


    return (
        <div>
            {/* This is the weather page */}
            <label htmlFor="City">City</label>
            <input
                onChange={handleChange}
                value={form.city}
                id='city'
                name='city'
                placeholder="City"
            />
            <button onClick={handleSubmit}>Send</button>
            <div>
                <WeatherResults data={search}/>
            </div>
        </div>
    )
}

export default WeatherPage