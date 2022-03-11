import React from 'react';

class Home extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Home;

// test//
