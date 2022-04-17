import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import AccountHome from './components/AccountHome';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import { Provider } from "react-redux";
import reducer from './reducers';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import WeatherPage from './components/WeatherPage';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

const store = createStore(reducer, applyMiddleware(thunk, logger))

function App({ dispatch }) {
  const { push } = useHistory()
  useEffect(() => {
    if(window.localStorage.getItem('login')){
      push('/home')
    }
  }, [])
  
  return (
    <Provider store={store}>
    <div className="App">
      <NavBar/>
      <div>
        <Switch>
          <Route exact path ='/front' component={HomePage}/>
          <PrivateRoute exact path ='/home' component={AccountHome}/>
          <Route exact path ='/login' component={LoginForm}/>
          <PrivateRoute exact path ='/weather' component={WeatherPage}/>
          <Route exact path ='/register' component={Register}/>
          <Route exact path ='/logout' component={Logout}/>
          <Route exact path ='/' component={HomePage}/>
          
        </Switch>
      </div>
    </div>
    </Provider>
  );
}

// const mapState = state => {
//   return {
//     loggedIn: state.loggedIn
//   }
// }

export default App;
