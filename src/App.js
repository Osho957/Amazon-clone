import React ,{useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './Stateprovider';
import { auth } from 'firebase';

function App() {
  

  return (
    <Router>
 <div className="App">
     <Switch>
       <Route path="/checkout">
         <Header/>
         <Checkout/>
       </Route>
       <Route path="/Login">
      <Login/>
       </Route>
       <Route path="/">
         <Header />
         <Home />
       </Route>
     </Switch>
    </div>
    </Router>
   
  );
}

export default App;
