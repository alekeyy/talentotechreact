import { Link } from "react-router-dom";

function Cart() {
    return (
        <section>
            <h2>Carrito de compras</h2>
            <p className="text-muted">Tu carrito está vacío.</p>
            <Link to="/productos" className="btn btn-primary">Ir a productos</Link>
        </section>
    );
}

export default Cart;
