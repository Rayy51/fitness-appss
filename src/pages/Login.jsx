import { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';
import img1 from '../assets/images/gymgirl.jpg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username === "konnichiwa";
        const isCorrectPassword = password === "senpai";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("123456");
            navigate("/dashboard");
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col xs={12} md={6} lg={6} className="d-flex align-items-center">
                    <div className="login-form p-4 border rounded shadow mx-auto">
                        <h1 className="text-center mb-4">Welcome to MY FittracK!</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username
                                    <i className={"bi bi-person-lock"} style={{ "font-size": "28" }}></i>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <Form.Text className='text-muted'>
                                    You info is safe with us, HEHE.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId='formBasicPassword'>
                                <Form.Label>Password
                                    <i className={"bi bi-lock-fill"} style={{ "font-size": "28" }}></i>
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" className="w-100" onClick={login}>Login</Button>
                        </Form>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                    <img
                        src={img1}
                        alt=""
                        className="img-fluid rounded"
                    />
                </Col>
            </Row>
        </Container>
    );
}