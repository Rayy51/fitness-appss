import { Container, Row, Col, Card } from 'react-bootstrap';
import legswing from "../assets/images/legswings.png"
import squat from "../assets/images/squat.png"
import lunges from "../assets/images/lunges.png"
import highknees from "../assets/images/highknees.jpg"
import calfraise from "../assets/images/calfraise.jpg"
import plank from "../assets/images/plank.jpg"


const warmUpExercises = [
    {
        title: 'Leg Swings',
        description: 'Stand on one leg and swing the other leg forward and backward for 15-20 swings.',
        image: legswing
    },
    {
        title: 'Bodyweight Squats',
        description: 'Perform 2 sets of 10-15 bodyweight squats to warm up the legs.',
        image: squat
    },
    {
        title: 'Walking Lunges',
        description: 'Take a step forward and lower your hips into a lunge position. Do this for 10-15 lunges on each leg.',
        image: lunges
    },
    {
        title: 'High Knees',
        description: 'Run in place while bringing your knees up towards your chest. Perform for 30 seconds.',
        image: highknees
    },
    {
        title: 'Calf Raises',
        description: 'Stand on the edge of a step and raise your heels up and down for 15-20 repetitions.',
        image: calfraise
    },
    {
        title: 'Plank',
        description: 'Keep your spine in a neutral position and your head, torso, and legs are aligned. 2 set for 15 seconds.',
        image: plank
    }

];

const WarmUp = () => {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Warm-Up Exercises for Leg Training</h1>
            <Row>
                {warmUpExercises.map((exercise, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={exercise.image} />
                            <Card.Body>
                                <Card.Title>{exercise.title}</Card.Title>
                                <Card.Text>{exercise.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WarmUp;