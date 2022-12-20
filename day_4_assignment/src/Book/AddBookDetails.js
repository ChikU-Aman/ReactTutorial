import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddBookDetails = () => {
    const [book, setBook] = useState({ "title": "", "author": "", "genre": "", "summary": "", "id": 0 });

    const [genreColl, setGenreColl] = useState([]);

    const fetchGenre = async () => {
        const data = await fetch("http://localhost:500/genre");
        const parsedData = await data.json();
        setGenreColl(parsedData);
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:500/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
        //console.log(book);
    }

    const changeHandler = (e) => {

        setBook({ ...book, [e.target.name]: e.target.value });
        //console.log(book);
    }

    useEffect(() => {
        fetchGenre();
    }, []);
    return (
        <Form style={{marginTop:"45px"}}>
            <Form.Group className="mb-4">
                <Form.Label style={{marginLeft:"20px"}}>Title :</Form.Label>
                <Form.Control style={{marginLeft:"20px",width:"60%"}} type="text" placeholder="Title" name="title" value={book.title} onChange={changeHandler} />

            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label style={{marginLeft:"20px"}}>Author :</Form.Label>
                <Form.Control style={{marginLeft:"20px",width:"60%"}} type="text" placeholder="Author" name="author" value={book.author} onChange={changeHandler} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Label style={{marginLeft:"20px"}}>Genre :</Form.Label>
                <Form.Select style={{marginLeft:"20px",width:"60%"}} name="genre" value={book.genre} onChange={changeHandler}>
                    <option value="">Select Genre :</option>
                    {genreColl.map((genre) => {
                        return <option value={genre}>{genre}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label style={{marginLeft:"20px"}}>Summary :</Form.Label>
                <Form.Control style={{marginLeft:"20px",width:"60%",height:"100px"}} type="text" placeholder="Summary" name="summary" value={book.summary} onChange={changeHandler} />
            </Form.Group>
            <Button style={{marginLeft:"15%",width:"30%"}} variant="success" type="submit" onClick={(e) => clickHandler(e)}>
                Submit
            </Button>
        </Form>
    )
}

export default AddBookDetails