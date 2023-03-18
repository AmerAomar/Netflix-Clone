import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (


    <>
      <Navbar bg='dark' variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ color: "#ffd700" }}>All Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "#ffd700" }}>Home</Nav.Link>
            <Nav.Link href="/favorite" style={{ color: "#ffd700" }}>Favorite list</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Header