import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: {},
    };
  }

  componentDidMount() {
    this.handleGetProductDetails();
  }

  async handleGetProductDetails() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const productDetails = await getProductDetails(id);
    this.setState({
      productDetails,
    });
  }

  render() {
    const { productDetails } = this.state;
    const { handleAddItem, ttItems } = this.props;

    return (
      <div>

        <nav>
          <h2>Grupo 29 - Online Store</h2>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button className="cart" type="button">
              Carrinho
            </button>
          </Link>
        </nav>

        <h2>Detalhes do produto</h2>
        <div>
          <p data-testid="product-detail-name">{productDetails.title}</p>
        </div>
        <div>
          <p>Quantidade</p>
          <span> - </span>
          <span>{ ttItems }</span>
          <span> + </span>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleAddItem(productDetails.id) }
        >
          Adiciona ao carrinho
        </button>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  handleAddItem: PropTypes.func.isRequired,
  ttItems: PropTypes.number.isRequired,
};

export default Details;
