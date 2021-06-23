class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
    <div>
      <img>{ pokemon.image }</img>;
      <h2>{ pokemon.name }</h2>;
      <p>Pokemon do Tipo: { pokemon.type }</p>;
      <p>Tamanho: { pokemon.averageWeight.value }{ pokemon.averageWeight.measurementUnit }</p>;
    </div>
    );
    }
}

export default Pokemon;