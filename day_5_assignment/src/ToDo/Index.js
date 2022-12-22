import React, { useEffect, useReducer, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Table, Button } from 'reactstrap';

const Index = () => {

  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState({"id":0,"task":"",isDone:false});


  const fetchTodos = async () => {
    const data = await fetch("http://localhost:5000/todos");
    const parsedData = await data.json();
    setTodos(parsedData);
  }

  const handleChange = async(e,todo) => {
    const requestOptions = {
      'method': 'PUT',
      'body': JSON.stringify({
        task:todo.task,
        isDone: e.target.checked
      }),
      'headers': { "Content-type": "application/json" }
    }

    const data = await fetch(`http://localhost:5000/todos/${todo.id}`, requestOptions);
    const response = await data.json();
    fetchTodos();
  }

  const deleteTodo = async(id) =>{
    const data = await fetch(`http://localhost:5000/todos/${id}`,{method:'delete'})
    const response = await data.json();
    fetchTodos();
  }
  
  const handleSubmit = async() =>{
    await fetch('http://localhost:5000/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
              fetchTodos();
            })
            .catch((err) => {
                console.log(err.message);
            });
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <Container style={{ marginTop: "100px" }}>
      <input type="text" placeholder='Enter to add' name="task" onChange={(e) => setTodo({...todo,[e.target.name] : e.target.value})}/>
      <Button color="success" onClick={(e) =>handleSubmit()} >Add</Button>
      <Table>
        <thead>
          <th>Todo List</th>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return <tr>
              <input type="radio" checked={todo.isDone} onChange={(e) => handleChange(e,todo)} />
              {(todo.isDone) && <td><s>{todo.task}</s></td>
              }
              {(!todo.isDone) && <td>{todo.task}</td>
              }
              <td><Button color="danger" onClick={(e) => deleteTodo(todo.id)}>Delete</Button></td>
            </tr>
          })}
        </tbody>
      </Table>
    </Container>

  )
}

export default Index