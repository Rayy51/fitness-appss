import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <Container>
            <h1 className='my-3'>Dashboard</h1>
            <Row>
                <Col md={6}>
                    <Card className='my-3'>
                        <Card.Body>
                            <Card.Title>Workout Plans</Card.Title>
                            <Card.Text> Manage your workout plans. </Card.Text>
                            <Card.Link href="/add">Add Your workout</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='my-3'>
                        <Card.Body>
                            <Card.Title>Warm Up</Card.Title>
                            <Card.Text> Follow the warm up exercises, dont get hurt !</Card.Text>
                            <Card.Link href="/warmup">See more about warm up</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='my-3'>
                        <Card.Body>
                            <Card.Title>Target Goals</Card.Title>
                            <Card.Text> Lets set some target goals for yourself, you deserve that !</Card.Text>
                            <Card.Link href="/goals">Set Goals!</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

