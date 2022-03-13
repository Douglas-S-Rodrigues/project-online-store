import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories, product, productsRequest } = this.props;

    return (
      <div className="category-list">
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <label data-testid="category" htmlFor={ category.id }>
                <input
                  type="radio"
                  id={ category.id }
                  name="categoryButton"
                  onClick={ () => productsRequest(category.id, product) }
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  product: PropTypes.string.isRequired,
  productsRequest: PropTypes.func.isRequired,
};

export default CategoryList;
