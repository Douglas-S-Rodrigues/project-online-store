import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { product, handleChange, productsRequest } = this.props;

    return (
      <>
        <div className="input-search">
          <input
            type="text"
            name="product"
            data-testid="query-input"
            value={ product }
            onChange={ handleChange }
            autoComplete="off"
          />

          <button
            type="button"
            data-testid="query-button"
            onClick={ () => productsRequest(null, product) }
          >
            Buscar
          </button>
        </div>

        <div className="home-initial-message">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </>
    );
  }
}

Search.propTypes = {
  product: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  productsRequest: PropTypes.func.isRequired,
};

export default Search;
