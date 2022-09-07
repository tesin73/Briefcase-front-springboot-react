import { Button, Card } from "react-bootstrap"
import './../styles/Home.css'
import React, { useState, useEffect, Component } from 'react';


export default function Home() {
    const [knowledge, setKnowledge] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/knw/knowledge", {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(response => setKnowledge(response))
    })

    return (
        <>
            <div className="mainContentDiv">
                <h1 style={{}}>Main content</h1>
                <p style={{ fontSize: '1.2rem' }}>a</p>
            </div>

            <div className="homeCardsContainer">
                {knowledge.map(knowledge => (
                    <Card className="" style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img src={knowledge.image} variant="top" />
                        <Card.Body>
                            <Card.Title>{knowledge.name}</Card.Title>
                            <Card.Text>
                                {knowledge.content}
                            </Card.Text>
                            <Button href={knowledge.url} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}