import './App.css';
import React, { useState, useEffect, Component } from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


