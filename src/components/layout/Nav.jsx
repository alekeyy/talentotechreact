import "./styles/nav.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="site-nav">
            <ul className="site-nav-list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito" className="site-nav-cart">Carrito</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;
