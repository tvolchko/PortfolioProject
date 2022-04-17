import React from "react";
import { connect } from "react-redux";
import { fetchSuccess } from "../actions";

const AccountHome = ({ dispatch }) => {
    if(window.localStorage.getItem('login')){
        dispatch(fetchSuccess())
    }
    return (
        <>This is the Account Landing page!</>
    )
}

const mapState = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(AccountHome)