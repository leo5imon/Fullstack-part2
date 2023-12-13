const Courses = (props) => {
    const course = [
        {
          name: 'Half Stack application development',
          id: 1,
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
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    return (
        <>
            {course.map(course => 
                <div key={course.id}>
                    <h1 key={course.id}>{course.name}</h1>
                    {course.parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
                    <p style={{fontWeight: 700}}>total of {course.parts.reduce((p, c) => p + c.exercises, 0)} exercises</p>
                </div>
            )}
        </>
    )}
    
export default Courses