import "./styles/footer.css"
import { useState } from "react";
import PeopleListContainer from "../people/PeopleListContainer";

function Footer() {
    const [email, setEmail] = useState("");
    const [suscripto, setSuscripto] = useState(false);

    const manejarSuscripcion = (evento) => {
        evento.preventDefault();
        setSuscripto(true);
        setEmail("");
    }

    return (
        <footer className="site-footer">
            <div className="site-footer-top">
                {/* Marca */}
                <div className="site-footer-col site-footer-brand">
                    <span className="site-footer-logo">GPU Seller</span>
                    <p>Placas de video nuevas y con garantía oficial. Envíos a todo el país.</p>
                </div>

                {/* Contacto */}
                <div className="site-footer-col">
                    <h6>Contacto</h6>
                    <ul>
                        <li><a href="mailto:contacto@gpuseller.com">contacto@gpuseller.com</a></li>
                        <li><a href="tel:+541140001234">+54 11 4000-1234</a></li>
                        <li>Lun a Vie de 9 a 18 h</li>
                    </ul>
                </div>

                {/* Sucursales */}
                <div className="site-footer-col">
                    <h6>Sucursales</h6>
                    <ul>
                        <li>CABA: Av. Corrientes 1234</li>
                        <li>Córdoba: Bv. San Juan 567</li>
                        <li>Rosario: Calle Córdoba 890</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="site-footer-col">
                    <h6>Newsletter</h6>
                    {suscripto ? (
                        <p>¡Gracias por suscribirte!</p>
                    ) : (
                        <form className="site-footer-newsletter" onSubmit={manejarSuscripcion}>
                            <input
                                className="input"
                                type="email"
                                placeholder="Tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button className="btn btn-primary" type="submit">Suscribirme</button>
                        </form>
                    )}
                </div>
            </div>

            {/* Tarjetas del equipo */}
            <div className="site-footer-team">
                <h6>Nuestro equipo</h6>
                <PeopleListContainer />
            </div>

            <hr className="hr" />

            {/* Propiedad intelectual y políticas */}
            <div className="site-footer-bottom">
                <p>&copy; 2025 GPU Seller. Todos los derechos reservados. Las marcas mencionadas pertenecen a sus respectivos dueños.</p>
                <div className="site-footer-legal">
                    <a href="#">Políticas de privacidad</a>
                    <a href="#">Términos y condiciones</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
