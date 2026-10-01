import "./styles/items.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Item({id, nombre, precio, imagen}){
    const [favorito, setFavorito] = useState(false);

    const addFavorito = () => {
        setFavorito(!favorito)
    }

    return <>
        <div className="product">
            <img className="img-thumbnail product-img" src={imagen} alt={nombre}></img>
            <div>
                <h3 onClick={() => addFavorito()} className="product-title">{nombre} {favorito == false ? "☆" : "★"}</h3>
                <p className="product-text">Articulo a partir de ${precio}</p>
                <div>
                    <Link to={`/producto/${id}`} className="btn btn-primary">Ver mas</Link>
                </div>
            </div>
        </div>
    </>
}

export default Item
