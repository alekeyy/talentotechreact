import { useState, useEffect } from 'react'

function FormContainer() {
    const [datosForm, setDatosForm] = useState({
    nombre: '', precio: '', stock: ''
    });

    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        const apiKey = 'TU-API-KEY'; //  ¡Aquí va tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);

        const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });
        const imgbbData = await respuesta.json();
        const urlImagen = imgbbData.data.url;

        const productoCompleto = { ...datosForm, urlImagen: urlImagen };
        console.log('Producto listo para enviar:', productoCompleto);
    };

    return <>
    
    </>
}

export default FormContainer