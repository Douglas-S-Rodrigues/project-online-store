import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button"> Carrinho </button>
        </Link>
      </div>
    );
  }
}

export default Home;

// test //
