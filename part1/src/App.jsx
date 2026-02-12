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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        p1={part1} ex1={exercises1} 
        p2={part2} ex2={exercises2} 
        p3={part3} ex3={exercises3} 
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
