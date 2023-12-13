const Courses = (props) => {
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
      }]}

    let sum = 0;

    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(parts => <p key={parts.id}>{parts.name}</p>)}
            <p style={{fontWeight: 700}}>total of {course.parts.map(parts => {sum += parts.exercises})} {sum} exercises</p>
        </>
    )}
    
export default Courses