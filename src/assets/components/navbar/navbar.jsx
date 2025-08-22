import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function NavbarMain() {
  const [query, setquery]=useState('');
  const navigate=useNavigate()
  const handleSearch=async(e)=>{
    e.preventDefault()
    if (!query.trim())return
    navigate(`/search?q=${query}`)
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="index.html"><strong style={{ fontSize:'30px'}}>←</strong ></Navbar.Brand>
        <Navbar.Brand href="index.html">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={query}
              onChange={(e)=>setquery(e.target.value)}
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;