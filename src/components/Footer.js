import { Container } from "react-bootstrap";

const Footer = () => {
    return(
        <Container className="d-flex justify-content-center" style={{backgroundColor: 'rgb(33,37,41)', color: 'white'}} fluid>
            <Container className="m-3">
                <h4 style={{color: '#0095ff'}}>Westinbridge</h4>
            </Container>

            <Container className="m-3" >
                Contact Us
                <ul style={{listStyle: 'none'}}>
                    <li><a href='/'>Email</a></li>
                    <li><a href='/'>LinkedIn</a></li>
                    <li><a href='/'>Call us</a></li>
                </ul>
            </Container>
        </Container>
    )
}

export default Footer;