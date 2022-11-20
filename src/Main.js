import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Create from "./Create";
import List from "./List";
import Search from "./Search";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Zoo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Crear Tucan</Nav.Link>
            <Nav.Link href="/list">Listar Tucanes</Nav.Link>
            <Nav.Link href="/search">Buscar Tucan</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="content">
                <Routes>
                  <Route exact path="/" element={<Create />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </div>
      </BrowserRouter>
    );
  }
}

export default Main;