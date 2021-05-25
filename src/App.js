import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './views/homePage/HomePage';
import Room from './views/room/Room';
import Finish from './views/finish/Finish';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/room" component={Room} />
          <Route path="/finish" component={Finish} />
        </Switch>
    </div>
  );
}

export default App;
