import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function Navsbar() {
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Recipes</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favList">Recipes List</Nav.Link>
      </Nav>
    </Container>
  </Navbar>;
}
