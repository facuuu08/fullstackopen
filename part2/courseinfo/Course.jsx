const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Total = ({course}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <b>total of {total} exercises</b>
}

const Course = ({course}) => (
  <div>
   <Header course={course} />
   <Content parts={course.parts} />
   <Total parts={course.parts} />
  </div>
)

export default Course
