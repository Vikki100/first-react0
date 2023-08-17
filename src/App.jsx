import React from 'react'

const App = () => {

  // function Component(props) {
  //   return(
  //    <h2>{props.name}: {props.age}</h2>
  //   )
    
  // }

  function Component({name , age}) {                      // props ko distructur kiye h 
    return(
      <>
      <p>{name}: {age} hii</p>
      <hr />
    </>
    )
    
  }

  return (
    <div>
      <Component name='manish' age={20}></Component>
      <Component name='yogesh '  age={24}></Component>
      <Component name='ravi '  age={26}></Component>


    </div>

  )
}

export default App