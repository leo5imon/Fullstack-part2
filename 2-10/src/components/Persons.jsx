const Persons = (props) => {
    return (
        <>
            {props.persons
                .filter((person) => person.name.toLowerCase().includes(props.filter.toLowerCase()))
                .map((person) => (
                    <p key={person.name}>
                    {person.name} {person.number}
                    </p>
            ))}
        </>
    )
}

export default Persons