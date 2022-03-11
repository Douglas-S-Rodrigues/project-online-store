import React from 'react';
import { getProductsFromTerms } from '../services/api';

import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.productsRequest = this.productsRequest.bind(this);

    this.state = {
      product: '',
      products: [],
      request: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  async productsRequest(product) {
    const products = await getProductsFromTerms(product);

    this.setState({
      products: [...products],
      request: true,
    });
  }

  render() {
    const { product, products, request } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            name="product"
            data-testid="query-input"
            value={ product }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.productsRequest(product) }
          >
            buscar
          </button>
        </form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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

export default Home;

// test //
