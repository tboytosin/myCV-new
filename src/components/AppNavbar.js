
import {Fragment} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Appnavbar () {
	return (
	<Fragment>
	<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
	  <Navbar.Brand as={Link} to={'/'}>Tbizz Personal Blog</Navbar.Brand>
	  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
	  <Navbar.Collapse id="responsive-navbar-nav">
	    <Nav className="ms-auto me-3">
	      <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
	      <Nav.Link as={Link} to={'/projects'}>Projects</Nav.Link>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
	</Fragment>
	)
}