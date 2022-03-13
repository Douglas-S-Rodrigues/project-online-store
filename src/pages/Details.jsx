import React from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetails: {},
    };
  }

  componentDidMount() {
    this.handleGetProductDetails();
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

  render() {
    const { productDetails } = this.state;

    return (
      <>
        <h2>Detalhes do produto</h2>
        <div>
          <p data-testid="product-detail-name">{productDetails.title}</p>
        </div>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
