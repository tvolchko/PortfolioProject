import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
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

const store = createStore(reducer, applyMiddleware(thunk, logger))

function App({ dispatch }) {

  
  return (
    <Provider store={store}>
    <div className="App">
      <NavBar/>
      <div>
        <Switch>
          <Route exact path ='/front' component={HomePage}/>
          <Route exact path ='/home' component={AccountHome}/>
          <Route exact path ='/login' component={LoginForm}/>
          <Route exact path ='/weather' component={WeatherPage}/>
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
