import "./styles/header.css"
import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";

function Header() {
    return (
        <header className="site-header">
            <Link to="/" className="site-header-brand">GPU Seller</Link>
            <Nav />
        </header>
    );
}
export default Header;
