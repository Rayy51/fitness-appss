import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import './AddTodo.css';

export default function AddTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const setTodos = useContext(TodoContext).setTodos;
    const todos = useContext(TodoContext).todos;

    const navigate = useNavigate();

    function addTodo(event) {
        event.preventDefault();
        setTodos([...todos, { id: Date.now(), title, description, completed }]);
        navigate("/");
    }

    return (
        <Container>
            <h1 className="my-3">Add Your Workout</h1>
            <Form onSubmit={addTodo}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Which part of your body you feeling to torture today?</Form.Label>
                    <Form.Select value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option>PUSH DAY</option>
                        <option>PULL DAY</option>
                        <option>LEG</option>
                        <option>RESTTIME</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as='textarea'
                        rows={5}
                        placeholder={`1. DB inclinde press 25*12 25*12 25*12 \n2. Barbell Overhead 20*10 20*10 20*10\n3. Arnold Press 7*8 7*8 7*8`}
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

                <Button variant="primary" type="submit">Add Workout</Button>

            </Form>
        </Container>
    )
}
