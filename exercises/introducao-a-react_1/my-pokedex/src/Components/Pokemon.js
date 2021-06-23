import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
    <div>
      <img src={ pokemon.image } alt={ pokemon.name}></img>;
      <h2>{ pokemon.name }</h2>;
      <p>Type: { pokemon.type }</p>;
      <p>Size: { pokemon.averageWeight.value }{ pokemon.averageWeight.measurementUnit }</p>;
    </div>
    );
    }
}

export default Pokemon;