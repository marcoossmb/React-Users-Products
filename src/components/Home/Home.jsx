import CardHome from "./CardHome";

function Home() {
  return (
    <section className="container d-flex justify-content-evenly">
      <CardHome imagePath="./src/assets/images/usuarios.png" title="Usuarios" linkTo="/usuarios" />
      <CardHome imagePath="./src/assets/images/productos.jpg" title="Productos" linkTo="/productos" />
    </section>
  );
}

export default Home;