import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/details/:id" component={ Details } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
