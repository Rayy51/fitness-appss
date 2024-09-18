import { Container } from "react-bootstrap";
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center error-container">
            <h1 className="display-4 my-3">404</h1>
            <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
            <a href="/login" className="btn btn-primary">Go to Login Page</a>
        </Container>
    );
}