import React from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import CardList from '../components/CardList';

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

  async productsRequest(categoryId, queryProduct) {
    const { results } = await getProductsFromCategoryAndQuery(
      categoryId,
      queryProduct,
    );

    this.setState({
      products: [...results],
      request: true,
    });
  }

  render() {
    const { categoryId, categories, product, products, request } = this.state;

    return (
      <>
        <nav>
          <h2>Grupo 29 - Online Store</h2>
          <Link to="/Cart" data-testid="shopping-cart-button">
            <button className="cart" type="button">
              Carrinho
            </button>
          </Link>
        </nav>

        <header>
          <Search
            product={ product }
            categoryId={ categoryId }
            handleChange={ this.handleChange }
            productsRequest={ this.productsRequest }
          />
        </header>

        <main>
          <CategoryList
            product={ product }
            categories={ categories }
            productsRequest={ this.productsRequest }
          />

          <CardList products={ products } request={ request } />
        </main>
      </>
    );
  }
}

export default Home;
