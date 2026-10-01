import ItemDetails from "./ItemDetails"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function ItemDetailContainer(){
        const { id } = useParams();
        const [producto, setProducto] = useState(null);
        const [error, setError] = useState(null);
        const [cargando, setCargando] = useState(true);

        useEffect(() => {
            fetch('/productos.json')
            .then((res) => {
                if (!res.ok) {
                throw new Error('No se pudo cargar la información del producto');
                }
                return res.json();
            })
            .then((data) => {
                const encontrado = data.find((item) => item.id === Number(id));
                if (!encontrado) {
                throw new Error('El producto no existe');
                }
                setProducto(encontrado);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
        }, [id]);

        if (cargando) {return <p>Cargando producto, por favor espere...</p>;}

        if (error) { return <p>Error: {error}</p>; }

    return <>
        <Link to="/productos" className="btn btn-ghost">← Volver a productos</Link>
        <ItemDetails {...producto} />
    </>
}

export default ItemDetailContainer;
