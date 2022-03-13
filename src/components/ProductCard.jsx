import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, imagem, price } = this.props;

    return (
      <div className="card" data-testid="product">
        <img src={ imagem } alt={ title } />
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
