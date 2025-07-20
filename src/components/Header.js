import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header({ lang, setLang }) {
  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-brand">
          🎮 GameStats
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="custom-link">
              Home
            </Nav.Link>
          </Nav>

          <Button variant="outline-light" size="sm" onClick={toggleLang} className="lang-btn">
            {lang === 'en' ? 'FR' : 'EN'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
