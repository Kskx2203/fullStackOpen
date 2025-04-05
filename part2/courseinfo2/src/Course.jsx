// As a course has many parts, a component is made to extract each part's name and exercise (2.1)
const Part = ({ parts }) => <p>{parts.name} {parts.exercises}</p>

// 1. Display course name as header (2.1)
// 2. Display each part as a separate component and involving part.id as to have unique key value for React. (2.1)
const Course = ({ course } ) => {

    // 1. Returns the sum of all exercises of a course. (2.2)
    // 2. When used console.log(total, part), the last total is not displayed 
    // on console.log as there isnt anymore items to go through. (2.2)
    // 3. 2 iterations displayed when console.log is used bacause of strict mode to help with debugging. (2.2)
    // 4. Reduce is a function for arrays, can take in a callback function. (2.2)
    const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0)

    return (
      <>
        <h2>{course.name}</h2>
        {course.parts.map(part =>
          <Part key={part.id} parts={part}/>
        )}
        <b>total of {totalExercises} exercises</b>
      </>
    )
}

export default Course
