import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { useHistory } from "react-router-dom";
import { register } from "../actions";


const initialForm = {
    username: '',
    password: '',
    email: '',
}

const Register = ({loggedIn, dispatch}) => {
    const [form, setForm] = useState(initialForm)
    const { push } = useHistory()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(form))
    }
    useEffect(() => {
        if(window.localStorage.getItem('login')){
            push('/home')
        }
    }, [loggedIn])


    return (
        <>
            <form>
                <h2>Register:</h2>
            <div className="formItem">
                <label htmlFor="username">User Name:</label>
                <input 
                    onChange={handleChange}
                    value={form.username}
                    id='username'
                    name='username'
                    placeholder="User Name"
                />
            </div>
            <div className="formItem">
                <label htmlFor="password">Password:</label>
                <input 
                    onChange={handleChange}
                    value={form.password}
                    id='password'
                    name='password'
                    type={'password'}
                    placeholder={'Password'}
                />
            </div>
            <div className="formItem">
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={handleChange}
                    value={form.email}
                    id='email'
                    name='email'
                    type={'email'}
                    placeholder="Email"
                />
            </div>
            <button onClick={handleSubmit}>Register Account</button>
        </form>
        </>
    )
}

const mapState = state => {
    return{
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(Register)