// css
import '../styles/Landing.css'

import {Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap';



export default function Landing() {
	return (
		<Container fluid>
			<Row className='banner'>
			<div className='inner-banner' >
			<Col lg={12} sm = {9} xs ={10}className='mx-auto'>
			<div className=' m-5 p-2'>
			<div className=' p-2'>
				<div className=' p-2'>
				<div className='title p-5'>
					<h1>Hi! I'm Tosin</h1>
					<h4>Full Stack Developer</h4>
					<Button as={Link} to={'/about'} type ='submit' className='landing-btn'>Know more</Button>
				</div>	
				</div>
			</div>
			</div>
			</Col>
			</div>
			</Row>
		</Container>
	)
}