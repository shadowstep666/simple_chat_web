import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Register from './components/Register';
import { AuthContext } from './custom/auth';
import AuthRoute from './custom/AuthRoute';
import ChatBox from './components/ChatBox';

function App() {
  const accessToken = localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`);
  const [authToken, setAuthToken] = useState(accessToken);

  const setToken = (key, data) => {
    if (data) {
      localStorage.setItem(`${process.env.REACT_APP_PREFIX}-${key}`, data);
    } else {
      localStorage.removeItem(`${process.env.REACT_APP_PREFIX}-${key}`);
    }
    setAuthToken(data);
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
        <Router>
          <AuthRoute path="/" exact component={Chat}></AuthRoute>
          <AuthRoute path="/:id" component={Chat}></AuthRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
