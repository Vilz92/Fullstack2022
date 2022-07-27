const Hello = (props) => {
  const bornYear = () => {    
    const yearNow = new Date().getFullYear()    
    return yearNow - props.age  
  }
  
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>    </div>
  )
}


const App = () => {
  const now = new Date()
  const nimi = 'Pekka'  
  const ika = 10

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <Hello name="Maya" age={26 + 10} />      
      <Hello name={nimi} age={ika} />
    </div>
  )
}

export default App