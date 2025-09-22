import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; 
import logo from "../assets/Images/headerLogo.png";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-0">
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0 m-0">
          <img
            src={logo}
            alt="logo"
            className="header_logo"
            width={120}
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className="pe-4 ps-0 fs-6 fw-semibold text-light" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="pe-4 ps-0 fs-6 fw-semibold text-light" as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link className="pe-4 ps-0 fs-6 fw-semibold text-light" as={Link} to="/services">Services</Nav.Link>
          <Nav.Link className="pe-0 ps-0 fs-6 fw-semibold text-light" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
