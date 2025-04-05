const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  // As a course has many parts, a component is made to extract each part's name and exercise (2.1)
  const Part = ({ parts }) => <p>{parts.name} {parts.exercises}</p>

  // 1. Returns the sum of all exercises of a course. (2.2)
  // 2. When used console.log(total, part), the last total is not displayed 
  // on console.log as there isnt anymore items to go through. (2.2)
  // 3. Reduce is a function for arrays, can take in a callback function. (2.2)
  var totalExercises = course.parts.reduce(function(total, part) { return total + part.exercises }, 0)

  // 1. Display course name as header (2.1)
  // 2. Display each part as a separate component and involving part.id as to have unique key value for React. (2.1)
  const Course = ({ course } ) => {
    return (
      <>
        <h1>{course.name}</h1>
        {course.parts.map(part =>
          <Part key={part.id} parts={part}/>
        )}
        <b>total of {totalExercises} exercises</b>
      </>
    )
  }

  return <Course course={course} />
}

export default App
