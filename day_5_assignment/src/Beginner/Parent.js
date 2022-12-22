import React from 'react'
import Child from './Child';

const Parent = () => {
    const message = "Hi this is parent message to the child";
  return (
    <div>
        Parent Component message is : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Child message={message}/>
    </div>
  )
}

export default Parent