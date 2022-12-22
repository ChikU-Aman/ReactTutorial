import React from 'react'

const ChildFunction = (props) => {
  return (
    <div>
        This is child component function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>props.increment()}>Increment +</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>props.decrement()}>Decrement -</button>
    </div>
  )
}

export default ChildFunction