import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardUI = (props) => {

    const [visible,setVisible] = useState(false);
    const showSummary = () => {
        setVisible(!visible)
    }

    return (
        <Card style={{ width: '18rem', marginLeft: "10px",marginTop:"25px" }}>
            <Card.Body style={{ boxShadow: "10px 10px 10px grey" }}>
                <Card.Text style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>
                    {props.card.title}
                </Card.Text>
                <Card.Text>
                    <strong>Author :</strong> {props.card.author}
                </Card.Text>
                <Card.Text>
                    <strong>Genre :</strong> {props.card.genre}
                </Card.Text>
                {visible && <Card.Text>
                    <i>{props.card.summary}</i>
                </Card.Text>}
                <Button variant="success" onClick={showSummary}>Summary</Button>
            </Card.Body>
        </Card>
    )
}

export default CardUI