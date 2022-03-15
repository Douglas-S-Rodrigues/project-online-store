import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { idItem } = this.props;
    return (
      <div>
        { idItem.length < 1
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> : (
            idItem.map((item) => (
              <div key={ item.id }>
                <p
                  data-testid="shopping-cart-product-name"
                >
                  { item.title }
                </p>
              </div>
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
