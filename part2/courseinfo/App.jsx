import Course from './Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {name: 'Fundamental of React', exercises: 10, id: 1},
        {name: 'Using props to pass data', exercises: 7, id: 2},
        {name: 'State of a component', exercises: 14, id: 3},
        {name: 'Redux', exercises: 11, id: 4}
      ]
    },
    {
      name: 'Note.js',
      id: 2,
      parts: [
        {name: 'Routing', exercises: 3, id: 1},
        {name: 'Middlelewares', exercises: 7, id: 2}
      ]
    }
  ]

  return (
    <div>
     <h1>Web development curriculum</h1>
      {courses.map(course =>
       <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App
