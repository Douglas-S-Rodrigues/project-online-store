import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.handleProducts();
  }

  handleProducts = () => {
    const { idItem } = this.props;
    const arrayProducts = [];
    idItem.map(async (item) => {
      const getProducts = await getProductDetails(item);
      arrayProducts.push(getProducts);
    });
    this.setState({
      products: arrayProducts,
    });
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div>
        { products.length < 1
          ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3> : (
            products.map((item) => (
              <div key={ item.id }>
                <p
                  data-testid="shopping-cart-product-name"
                >
                  { item.title }
                </p>
              </div>
            ))
          )}
        <p data-testid="shopping-cart-product-quantity">{ products.length }</p>
      </div>
    );
  }
}

Cart.propTypes = {
  idItem: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cart;
