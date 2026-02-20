const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <div>
      {personsToShow.map(person => (
        <p key={person.id}>
          {person.name} {person.number} {' '}
          <button onClick={() => deletePerson(person.id)}>
            delete
          </button>
        </p>
      ))}
    </div>
  )
}

export default Persons
