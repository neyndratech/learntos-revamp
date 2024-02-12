import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Form, FormControl } from 'react-bootstrap'
import '../Styles/Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar_file() {
    const [activeLink, setActiveLink] = useState("/home");

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <>
            <Router>
                <Nav variant="pills" className='bg-dark text-white text-center'>
                    <Nav.Item>
                        <Link
                            to="/home"
                            className={`Nav-Links mx-4 ${activeLink === "/home" ? 'active' : ''}`}
                            onClick={() => setActiveLink("/home")}
                        >
                            For students
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/for-university"
                            className={`Nav-Links mx-4 ${activeLink === "/for-university" ? 'active' : ''}`}
                            onClick={() => setActiveLink("/for-university")}
                        >
                            For University
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            to="/for-business"
                            className={`Nav-Links mx-4 ${activeLink === "/for-business" ? 'active' : ''}`}
                            onClick={() => setActiveLink("/for-business")}
                        >
                            For Business
                        </Link>
                    </Nav.Item>
                </Nav>

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-8?fmt=png-alpha"
                            width="200"
                            height="50"
                            className="d-inline-block align-top my-2 mx-3"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='Navbar-collapse'>
                        <div className='Navbar-links py-2 mx-5'>
                            <Nav className="mr-auto">
                                <NavDropdown style={{fontSize:18}} className='text-dark' title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown style={{fontSize:18}} className='text-dark' title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <div className='mx-5'>
                                    <Button className='mx-1' href="#login">Login</Button>
                                    <Button className='mx-1' href="#signup">Signup</Button>
                                </div>
                            </Nav>
                        </div>


                        <div className='global-search col-12'>
                            <Form style={{ display: 'flex' }} className='mx-5 col-10'>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button className='mx-2' variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

            </Router>
        </>
    );
}

export default Navbar_file;
