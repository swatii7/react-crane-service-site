import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Images/acs-logo.png";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="sticky-navbar py-3 bg-white">
      <Container>
        <Navbar.Brand className="p-0 m-0" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <img
            src={logo}
            alt="Ashok Crane Services Logo"
            className="header_logo"
            width={50}
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-4 p-0 my-2 ms-0 fs-6 fw-semibold nav-link-custom" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</Nav.Link>
            <Nav.Link className="me-4 p-0 my-2 ms-0 fs-6 fw-semibold nav-link-custom" onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About Us</Nav.Link>
            <Nav.Link className="me-4 p-0 my-2 ms-0 fs-6 fw-semibold nav-link-custom" onClick={() => scrollToSection('services')} style={{ cursor: 'pointer' }}>Services</Nav.Link>
            <Nav.Link className="me-4 p-0 my-2 ms-0 fs-6 fw-semibold nav-link-custom" onClick={() => scrollToSection('gallery')} style={{ cursor: 'pointer' }}>Gallery</Nav.Link>
            <Nav.Link className="me-0 p-0 my-2 ms-0 fs-6 fw-semibold nav-link-custom" onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
