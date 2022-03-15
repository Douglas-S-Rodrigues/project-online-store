import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Cart from './pages/Cart';
import Details from './pages/Details';
import { getProductDetails } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      item: [],

    };
  }

  handleAddItem = async (proId) => {
    const { item } = this.state;
    this.setState({
      item: [...item, await getProductDetails(proId)],
    });
  }

  render() {
    const { item } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home handleAddItem={ this.handleAddItem } /> }
          />
          <Route
            exact
            path="/details/:id"
            render={ (routeProps) => (
              <Details
                { ...routeProps }
                handleAddItem={ this.handleAddItem }
                ttItems={ item.length }
              />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => <Cart idItem={ item } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
