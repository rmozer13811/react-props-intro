import "bootstrap/dist/css/bootstrap.min.css";

import ProductCard from "./ProductCard";
import Button from "./Button";
import SelectInput from "./SelectInput";

const products = [
  {
    image: "https://i.zst.com.br/thumbs/45/11/39/1272955049.jpg",
    title: "Tênis Nike Feminino Corrida",
    price: 179.99,
    howManyStores: 4,
    location: "/precos/Tênis Nike Feminino Corrida",
  },
  {
    image: "https://i.zst.com.br/thumbs/45/1d/38/995008890.jpg",
    title: "Cama Box Casal com Colchão",
    price: 385,
    howManyStores: 11,
    location: "/precos/Cama Box Casal com Colchão",
  },
  {
    title: 'Smart TV LED 32" TCL HDR 32S6500 2 HDMI',
    image: "https://i.zst.com.br/thumbs/45/10/35/792313295.jpg",
    price: 1209.82,
    howManyStores: 15,
    location: '/precos/Smart TV LED 32" TCL HDR 32S6500 2 HDMI',
  },
];

function App() {
  return (
    <div>
      {/* Props booleanas, caso existam, automaticamente valem true. Caso não existam, automaticamente valem false */}
      <Button outline rounded color="primary">
        Entrar
      </Button>

      <SelectInput
        label="Selecione seu idioma"
        items={["Português", "English", "Español"]}
      />

      <SelectInput
        label="Selecione seu sistema operacional"
        items={["Windows", "Mac OSX", "Linux"]}
      />

      {/* Os 'atributos' de um componente, que simulam atributos de uma tag HTML ficam disponíveis no objeto props dentro da definição do componente. O nome do atributo será o nome da propriedade que terá o valor do atributo dentro do objeto props */}
      {/* <ProductCard
        image="https://i.zst.com.br/thumbs/45/11/39/1272955049.jpg"
        title="Tênis Nike Feminino Corrida"
        price={179.99}
        howManyStores={4}
        location="/precos"
      />

      <ProductCard
        image="https://i.zst.com.br/thumbs/45/1d/38/995008890.jpg"
        title="Cama Box Casal com Colchão"
        price={385}
        howManyStores={11}
      /> */}

      {/* Renderizar vários componentes dinamicamente a partir de uma array, passando propriedades de objeto como props */}
      {products
        .sort((a, b) => b.price - a.price)
        .map((product) => {
          return (
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              howManyStores={product.howManyStores}
              location={product.location}
            />
          );
        })}
    </div>
  );
}

export default App;
