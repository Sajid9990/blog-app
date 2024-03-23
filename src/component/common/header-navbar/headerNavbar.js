import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function HeaderNavbar() {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary navbar navbar-danger" style={{ borderBottom: "1px solid gray" }}>
                <Container className=''>
                    <Navbar.Brand href="#home" className='text-dark'>
                        {/* <img src={`${process.env.PUBLIC_URL}/images/logo.png`} width={50} alt='business logo' /> */}
                        <h2>
                            <Link to={`/blog-app`} className='text-decoration-none text-dark'>
                                <strong>MazingBytes</strong>
                            </Link>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='bg-light'>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={`/blog-app`} className='text-decoration-none text-dark'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/aboutus`} className='text-decoration-none text-dark'>About</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </Fragment>


    );
}

export default HeaderNavbar;