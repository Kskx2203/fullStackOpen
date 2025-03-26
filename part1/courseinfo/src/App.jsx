const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => {
    return <h1>{course.name}</h1>
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = ( {parts} ) => {
    return (
      <>
        {Object.values(parts).map(part => (
          <Part key={part.name }name={part.name} exercises={part.exercises} />
        ))}
      </>
    )
  }

  const Total = ( {parts} ) => {
    return (
      <p>
        Number of exercises {Object.values(parts).reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
