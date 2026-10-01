import ItemList from "./ItemList"
import { useState, useEffect } from "react";


function ItemListContainer(){
        const [productos, setProductos] = useState([]);
        const [error, setError] = useState(null);
        const [cargando, setCargando] = useState(true);

        useEffect(() => {
            fetch('/products.json')
            .then((res) => {
                if (!res.ok) {
                throw new Error('No se pudo cargar la información de los productos');
                }
                return res.json();
            })
            .then((data) => {
                setProductos(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
        }, []);

        if (cargando) {return <p>Cargando productos, por favor espere...</p>;}

        if (error) { return <p>Error: {error}</p>; }

    return <>
        <h2>Productos</h2>
        <ItemList productos={productos} />
    </>
}

export default ItemListContainer;
