import Button from "./Button";

function getCurrency(language) {
  switch (language) {
    case "pt-BR":
      return "BRL";
    case "en-US":
      return "USD";
    case "fr-FR":
      return "EUR";
    default:
      return "USD";
  }
}

function ProductCard(props) {
  console.log(props);

  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <span>A partir de</span>
        <h2>
          {props.price.toLocaleString(navigator.language, {
            style: "currency",
            currency: getCurrency(navigator.language),
          })}
        </h2>
        <span>Em {props.howManyStores} lojas</span>

        {/* Toda informação passada entre a tag de abertura e a tag de fechamento do componente fica disponível na prop 'children' */}
        <Button location={props.location} color="primary">
          Ver preços
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
