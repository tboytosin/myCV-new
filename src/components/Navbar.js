import {Fragment} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Navbar() {
	return (
		<Fragment>
			<Nav defaultActiveKey="/home" variant='tabs' className="flex-column d-none d-xl-block accordion p-0">
			<Nav.Link as={Link} to={'/about'}>About</Nav.Link>
			<Nav.Link eventKey="link-1">Experience</Nav.Link>
			<Nav.Link eventKey="link-2">Education</Nav.Link>
			<Nav.Link eventKey="link-2">Skills</Nav.Link>
			</Nav>
		</Fragment>	
	)
}