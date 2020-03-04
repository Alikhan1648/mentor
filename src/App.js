import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Row, Col, Container, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './App.css';
import Mentors from './Mentors/Mentors.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">MentorMe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to='/'>Home</Link>
              <Link to='/mentors'>Mentors</Link>
              <NavDropdown title="Mentors" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Search</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">By topics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ranking</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#info">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="#login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/mentors">
              <Mentors />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
