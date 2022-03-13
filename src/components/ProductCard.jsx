import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, imagem, price, prodId } = this.props;

    return (
      <Link data-testid="product-detail-link" to={ `details/${prodId}` }>
        <div className="card" data-testid="product">
          <img src={ imagem } alt={ title } />
          <p>{title}</p>
          <p>{`R$ ${price}`}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  prodId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
