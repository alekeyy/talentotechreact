import PeopleList from "./PeopleList.jsx"
import { useState, useEffect } from "react";

function PeopleListContainer(){
        const [personas, setPersonas] = useState([]);
        const [error, setError] = useState(null);
        const [cargando, setCargando] = useState(true);

        useEffect(() => {
            fetch('/people.json')
            .then((res) => {
                if (!res.ok) {
                throw new Error('No se pudo cargar la información de las personas');
                }
                return res.json();
            })
            .then((data) => {
                setPersonas(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
        }, []);

        if (cargando) {return <p>Cargando personas, por favor espere...</p>;}

        if (error) { return <p>Error: {error}</p>; }

    return <PeopleList personas={personas} />
}

export default PeopleListContainer;