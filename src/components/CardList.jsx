import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

class CardList extends React.Component {
  render() {
    const { products, request, handleAddItem } = this.props;

    return (
      <div className="card-list">
        {!request ? '' : (
          <div>
            { products.length > 0 ? (
              <section>
                { products.map((prod) => (
                  <ProductCard
                    key={ prod.id }
                    imagem={ prod.thumbnail }
                    title={ prod.title }
                    price={ prod.price }
                    prodId={ prod.id }
                    addItem={ handleAddItem }
                  />
                )) }
              </section>
            ) : <h1>Nenhum produto foi encontrado</h1>}
          </div>
        )}
      </div>
    );
  }
}

CardList.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  request: PropTypes.bool.isRequired,
};

export default CardList;
