const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.p1} exercises={props.ex1} />
      <Part part={props.p2} exercises={props.ex2} />
      <Part part={props.p3} exercises={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 return (
   <div>
    <Header course={course} />
    <Content
      p1={part1.name} ex1={part1.exercises}
      p2={part2.name} ex2={part2.exercises}
      p3={part3.name} ex3={part3.exercises}
    />
    <Total total={part1.exercises + part2.exercises + part3.exercises} />
   </div>
 )
}

export default App
