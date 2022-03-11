import React from 'react';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = ({
      categories: [],
    });
  }

  componentDidMount() {
    this.receptCategories();
  }

  receptCategories = async () => {
    this.setState({
      categories: await getCategories(),
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <ul>
            {
              categories.map((category) => (
                <li key={ category.id }>
                  <label
                    data-testid="category"
                    htmlFor="categoryButton"
                  >
                    <input type="radio" id="categoryButton" />
                    { category.name }
                  </label>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <form>
            <input type="text" />
          </form>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

// test //
