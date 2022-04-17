import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    const {component:Component, ...rest} = props;
    
    return <Route {...rest} render={()=> {
        if(localStorage.getItem('login')) {
            return <Component {...rest}/>
        } else {
            return <Redirect to="/"/>
        }       
    }}/>
}

export default PrivateRoute;