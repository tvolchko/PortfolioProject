import React, { useEffect } from "react";
import '../App.css'
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSuccess } from "../actions";


const NavBar = ({loggedIn, dispatch}) => {
    // const { push } = useHistory()
    console.log(loggedIn)
    useEffect(() => {
        if(window.localStorage.getItem('login')) { 
            console.log(loggedIn)
            dispatch(fetchSuccess())
        }
      }, [])

    return (
        <div className="navBar">
            <h1>This is a NavBar</h1>
            {loggedIn ? <> <Link to='/logout'>Logout!</Link> <Link to='/weather'>Weather Page!</Link> </>: <Link to='/login'>Login!</Link>}
            <Link to='/front'>Front page!</Link>
        </div>
    )
}

const mapState = state => {
    return{
        loggedIn: state.loggedIn
    }
}

export default connect(mapState)(NavBar)