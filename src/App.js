import './App.css';
import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap"

export default function App() {
  const [knowledge, setKnowledge] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/knw/knwoledge')
      .then(response => response.json())
      .then(data => {
        setKnowledge(data);
      })
  })

  const handleSubmit = async (event) => {
    const data = {
      name: "aaa",
      url: "aaa",
      content: "aaa",
    }

    await fetch("http://localhost:8080/knw/knowledge", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  // const knowledgeList = 

  return (
    <>
      <Form onSubmit={handleSubmit} action="http://localhost:3000/knw/knowledge" style={{ marginBlock: '2rem', marginInline: '20vW', borderStyle: 'double' }}>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="User name" name="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="URL" name="url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>content</Form.Label>
            <Form.Control type="text" placeholder="content" name="content" />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" >
          Submit
        </Button>

      </Form>
      <p>a</p>
      <div>
        {knowledge.map(know => {
          return (
            <>
              <p>aaaaaa</p>
              <p>{know.name}</p>
            </>
          )
        })}
      </div>
    </>
  );
}


