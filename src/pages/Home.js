import { Button, Card } from "react-bootstrap"
import './../styles/Home.css'

export default function Home() {
    return (
        <>
            <div className="homeCardsContainer">
                <Card className="" style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}