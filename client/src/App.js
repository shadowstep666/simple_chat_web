import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import chat from './views/chat/chat';
import login from './views/account/login';
import register from './views/account/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={chat}></Route>
        <Route path="/login" component={login}></Route>
        <Route path="/register" component={register}></Route>
      </Router>
    </div>
  );
}

export default App;
