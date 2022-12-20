import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CardUI from './CardUI';

const CardComp = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const data = await fetch("http://localhost:500/books");
        const parsedData = await data.json();
        //console.log(parsedData);
        setBooks(parsedData);

    }



    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        // <div>
        //     {books.map((element) => {

        //     })}
        // </div>

        <div>
            <h1 style={{display:"flex",justifyContent:"flex-end",color:"#009AD5",marginRight:"100px"}}>Catalog</h1>
            <div style={{ display: "flex" }}>
                {books.map((element) => {
                    return <CardUI card={element} />
                    // return <Card style={{ width: '18rem', marginLeft: "10px" }}>
                    //     <Card.Body style={{ boxShadow: "10px 10px 10px grey" }}>
                    //         <Card.Text style={{display:"flex",justifyContent:"center",fontSize:"30px"}}>
                    //             {element.title}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             <strong>Author :</strong> {element.author}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             <strong>Genre :</strong> {element.genre}
                    //         </Card.Text>
                    //         {visible && <Card.Text>
                    //             <i>{element.summary}</i>
                    //         </Card.Text>}
                    //         <Button variant="success" onClick={showSummary}>Summary</Button>
                    //     </Card.Body>
                    // </Card>
                })}
            </div>

        </div>

    )
}

export default CardComp