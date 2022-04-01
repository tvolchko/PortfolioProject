import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logout } from '../actions';

const Logout = () => {
    const { push } = useHistory()

    useEffect(() => {
        window.localStorage.removeItem('login')
        // dispatch(logout())
        push('/front')

    })

    return (
        <div></div>
    )
}



export default connect(null)(Logout)