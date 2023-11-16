import { Navbar, Container, Nav, Button } from "react-bootstrap"

const Navigationbar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#" style={{color: '#0096FF'}}>Westinbridge</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/Assignment_westinbridge/">About Us</Nav.Link>
                <Nav.Link href="/Assignment_westinbridge/services">Services</Nav.Link>
            </Nav>
            <Button className="mx-2" variant="primary">Sign in</Button>
            <Button className="mx-2" variant="primary">Register</Button>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;