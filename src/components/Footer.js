import Container from 'react-bootstrap/Container';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="footer-content">
        <p className="mb-0">
          © 2025 GameStats. Site designed by Enuma Otiji.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
