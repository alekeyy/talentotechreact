function People({name, email, position, photo}){
    const iniciales = name.split(" ").map(parte => parte[0]).join("").slice(0, 2);

    return <>
        <div className="person-card">
            {photo
                ? <img className="person-photo" src={photo} alt={name} />
                : <div className="person-photo">{iniciales}</div>}
            <div>
                <h5 className="person-name">{name}</h5>
                <p className="person-position">{position}</p>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
    </>
}

export default People
