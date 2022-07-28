const Header = (props) => {
    return (
      <h2>{props.course}</h2>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  const Content  = (props) => {
    return (
      <div>
        { props.parts.map(part => 
          <Part
            key={part.id}
            part={part}
          />)
        }
      </div>
    )
  }
  
  const Total = (props) => {
    const initialValue = 0;
    const all = props.parts.reduce(
      (previousValue, currentValue) => previousValue + currentValue.exercises, initialValue
    );
  
    return (
      <b>total of {all} exercises</b>
    )
  }
  
  const Course = ({course}) => {
    return(
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course