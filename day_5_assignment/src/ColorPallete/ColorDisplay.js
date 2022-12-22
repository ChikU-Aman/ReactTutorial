import React from 'react'
import { useLocation } from 'react-router-dom'

const ColorDisplay = () => {
    const location = useLocation();
    //console.log(location);
  return (
    <h1 style={{color:`${location.state.color}`}}>Text Color is displaying according to Color select</h1>
  )
}

export default ColorDisplay