import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const ColorPicker = () => {

    const navigate = useNavigate();
    const clickHandler = (e) => {
        navigate("/ColorDisplay",{state:{color:e.target.value}});
        console.log(e.target.value);
    }

  return (
      <Container style={{marginTop:"50px",marginLeft:"400px"}}>
          <h4 style={{marginBottom:"50px",fontSize:"30px"}}>Choose a Color Pallete</h4>
          <Button style={{backgroundColor:"#1e81b0",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#1e81b0"} onClick={(e) => clickHandler(e)}></Button>
          <Button style={{backgroundColor:"#abdbe3",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#abdbe3"} onClick={(e) => clickHandler(e)}></Button>
          <Button style={{backgroundColor:"#e28743",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#e28743"} onClick={(e) => clickHandler(e)}></Button>
          <Button style={{backgroundColor:"#eab676",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#eab676"} onClick={(e) => clickHandler(e)}></Button>
          <Button style={{backgroundColor:"#21130d",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#21130d"} onClick={(e) => clickHandler(e)}></Button>
          <Button style={{backgroundColor:"#063970",height:"40px",width:"40px",borderStyle:"hidden"}} value={"#063970"} onClick={(e) => clickHandler(e)}></Button>

         
      </Container>
  )
}

export default ColorPicker