import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';

import { addEvaluation, getEvaluations } from '../services/evaluationAPI';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: {},
      email: '',
      rating: '',
      comment: '',
      evaluations: [],
    };
  }

  componentDidMount() {
    this.handleGetProductDetails();
    this.handleGetEvaluations();
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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const { email, rating, comment } = this.state;

    const evaluation = {
      id,
      email,
      rating,
      comment,
    };

    addEvaluation(evaluation);

    this.setState({
      email: '',
      comment: '',
    });

    this.handleGetEvaluations();
  };

  handleGetEvaluations() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const evaluations = getEvaluations().filter((evaluationId) => evaluationId.id === id);
    // console.log(getEvaluations());

    this.setState({
      evaluations,
    });
  }

  render() {
    const { productDetails, email, comment, rating, evaluations } = this.state;
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
          <span>{ttItems}</span>
          <span> + </span>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleAddItem(productDetails.id) }
        >
          Adiciona ao carrinho
        </button>
        <br />
        <br />
        <br />

        <div>
          <h2>Avaliações</h2>

          <form>
            <input
              data-testid="product-detail-email"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
            <br />
            <br />

            <select name="rating" value={ rating } onChange={ this.handleChange }>
              <option data-testid="1-rating" value="1 estrela">
                1 estrela
              </option>
              <option data-testid="2-rating" value="2 estrelas">
                2 estrelas
              </option>
              <option data-testid="3-rating" value="3 estrelas">
                3 estrelas
              </option>
              <option data-testid="4-rating" value="4 estrelas">
                4 estrelas
              </option>
              <option data-testid="5-rating" value="5 estrelas">
                5 estrelas
              </option>
            </select>

            <br />
            <br />

            <textarea
              data-testid="product-detail-evaluation"
              name="comment"
              id="comment"
              placeholder="Mensagem (Opcional)"
              value={ comment }
              onChange={ this.handleChange }
            />
            <br />
            <br />

            <button
              data-testid="submit-review-btn"
              onClick={ this.handleSubmit }
              type="button"
            >
              Avaliar
            </button>
          </form>
        </div>

        <div>
          {evaluations.map((evaluation, index) => (
            <div key={ index }>
              <p>{evaluation.email}</p>
              <p>{evaluation.rating}</p>
              <p>{evaluation.comment}</p>
              <hr />
            </div>
          ))}
        </div>
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
