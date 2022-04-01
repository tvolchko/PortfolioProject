import React, { useState } from "react";
import axios from "axios";
import WeatherResults from "./WeatherResults";


const initialForm = {
    city: ''
}



const WeatherPage = () => {
    const [form, setForm] = useState(initialForm)
    const [search, setSearch] = useState('')
    // const { push } = useHistory()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    
    

    const handleSubmit = e => {
        e.preventDefault()
        const apiKey = '8b0e59e8ca006a1bde99173dd339a78f'
        axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${form.city}`)
            .then(resp => {
                console.log(resp.data)
                setSearch(resp.data)
            })
            .catch(() => {
                
            })
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
                <WeatherResults data={search} />
            </div>
        </div>
    )
}

export default WeatherPage