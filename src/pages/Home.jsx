import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromTerms } from '../services/api';
import ProductCard from '../components/ProductCard';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.productsRequest = this.productsRequest.bind(this);

    this.state = {
      categories: [],
      product: '',
      products: [],
      request: false,
    };
  }

  componentDidMount() {
    this.receptCategories();
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  receptCategories = async () => {
    this.setState({
      categories: await getCategories(),
    });
  };

  async productsRequest(product) {
    const products = await getProductsFromTerms(product);

    this.setState({
      products: [...products],
      request: true,
    });
  }

  render() {
    const { categories, product, products, request } = this.state;

    return (
      <div>
        <div>
          <ul>
            {
              categories.map((category) => (
                <li key={ category.id }>
                  <label
                    data-testid="category"
                    htmlFor={ category.id }
                  >
                    <input
                      type="radio"
                      id={ category.id }
                      name="categoryButton"
                    />
                    { category.name }
                  </label>
                </li>
              ))
            }
          </ul>
        </div>

        <Link to="/Cart" data-testid="shopping-cart-button">
          <button type="button"> Carrinho </button>
        </Link>

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
