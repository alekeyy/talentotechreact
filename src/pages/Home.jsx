import { Link } from "react-router-dom";

function Home() {
    return (
        <section>
            <h1>Bienvenido a GPU Seller</h1>
            <p className="text-muted">Encontrá la placa de video ideal para jugar, diseñar o trabajar.</p>
            <Link to="/productos" className="btn btn-primary">Ver productos</Link>
        </section>
    );
}

export default Home;
