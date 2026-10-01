import People from "./People.jsx"

const PeopleList = ({personas}) => {
    return (
    <>
        <div className="people-list">
            {personas.map(persona => (
                <People key={persona.id} {...persona} />
            ))}
        </div>
    </>
    )
}

export default PeopleList
