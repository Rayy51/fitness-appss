import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";

export default function EditTodo() {
    const setTodos = useContext(TodoContext).setTodos;
    const todos = useContext(TodoContext).todos;
    const navigate = useNavigate();
    const id = parseInt(useParams().id);
    const currentTodo = todos.filter((todo) => todo.id === id)[0];
    const [title, setTitle] = useState(currentTodo.title);
    const [completed, setCompleted] = useState(currentTodo.completed);
    const [description, setDescription] = useState(currentTodo.description);


    function updateTodo(event) {
        event.preventDefault();
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    id,
                    title,
                    description,
                    completed
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
        navigate("/");
    }

    return (
        <Container>
            <h1 className="my-3">Add Todo</h1>
            <Form onSubmit={updateTodo}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Which part of your body you feeling to torture today?</Form.Label>
                    <Form.Select value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option>PUSH DAY</option>
                        <option>PULL DAY</option>
                        <option>LEG</option>
                        <option>RESTIME</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as='textarea'
                        rows={5}
                        placeholder={`1. DB inclinde press 25*12 25*12 25*12 \n2.Barbell Overhead 20*10 20*10 20*10\n3.Arnold Press 7*8 7*8 7*8`}
                        required
                    />
                </Form.Group>

                <Form.Check
                    type="checkbox"
                    id="completed"
                    label="Mark as completed"
                    checked={completed}
                    onChange={e => setCompleted(e.target.checked)}
                    className="mb-3"
                />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}