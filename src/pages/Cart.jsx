import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class Cart extends React.Component {
  render() {
    const { idItem } = this.props;
    return (
      <div>
        { idItem.length < 1
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> : (
            idItem.map(async (item) => (
              <>
                <p
                  data-testid="shopping-cart-product-name"
                >
                  { await getProductDetails(item).title }
                </p>
                console.log( await getProductDetails(item))
              </>
            ))
          )}
        <p data-testid="shopping-cart-product-quantity">{ idItem.length }</p>
      </div>
    );
  }
}

Cart.propTypes = {
  idItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cart;
