import React, { useState } from 'react'
import { Container } from 'reactstrap';
import ChildFunction from './ChildFunction';

const ParentFunction = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }
    return (
        <Container>
            <div>{count}</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ChildFunction name="counter" increment={increment} decrement={decrement}/>
        </Container>
    )
}

export default ParentFunction