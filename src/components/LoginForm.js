import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { useHistory } from "react-router-dom";




const initialForm = {
    userName: '',
    passWord: ''
}


const LoginForm = ({loggedIn, dispatch}) => {
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
        dispatch(login(form))
    }
    if(window.localStorage.getItem('login')){
        push('/home')
    }

    return (
        <>
        <form>
            <div className="formItem">
                <label htmlFor="username">User Name:</label>
                <input 
                    onChange={handleChange}
                    value={form.userName}
                    id='userName'
                    name='userName'
                    placeholder="User Name"
                />
            </div>
            <div className="formItem">
                <label htmlFor="password">Password:</label>
                <input 
                    onChange={handleChange}
                    value={form.passWord}
                    id='passWord'
                    name='passWord'
                    type={'password'}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

const mapState = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(LoginForm)