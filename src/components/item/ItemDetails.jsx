import "./styles/items.css"
import { useState } from "react";

function ItemDetails({nombre, precio, imagen}){
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [favorito, setFavorito] = useState(false);

    const aumentar = () => {
        setContador(contador + 1);
        setMensaje("");
    }
    const restar = () => {
        if(contador < 1){
            setMensaje("No se puede pedir menos que cero productos");
        } else {
            setContador(contador - 1);
        }
    }
    const addFavorito = () => {
        setFavorito(!favorito)
    }

    return <>
        <div className="product product-detail">
            <img className="img-thumbnail product-img" src={imagen} alt={nombre}></img>
            <div>
                <h3 className="product-title">{nombre} {favorito == false ? "☆" : "★"}</h3>
                <p className="product-text">Articulo a partir de ${precio}</p>
                <p className="product-text">Contador: {contador}</p>
                <p>{mensaje}</p>
                <div className="product-actions">
                    <button className="btn btn-secondary" onClick={() => aumentar()}>+</button>
                    <button className="btn btn-secondary" onClick={() => restar()}>-</button>
                    <button className="btn btn-primary">Comprar</button>
                    <button className="btn btn-ghost" onClick={() => addFavorito()}>{favorito == false ? "Añadir a" : "Quitar de"} favoritos</button>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetails
