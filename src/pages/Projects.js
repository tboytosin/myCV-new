import '../styles/Project.css';

import { Card, Row, Col } from "react-bootstrap";
import { Fragment } from 'react';

// pages...
import Navbar from '../components/AppNavbar';


export default function Projects() {
    return (
            <Fragment>
                <Navbar/>
                <Row className="project">
                <Col md={3} >
                <Card className='project-cards' >
                <Card.Img className='card-image' variant="top" src="./image/odarecyclingproject.png" />
                <Card.Body>
                    <Card.Title>ODA RECYCLING PROJECT</Card.Title>
                    <Card.Text>
                        A waste recycling website built with html, css and javascript
                    </Card.Text>
                    <div>
                    <a className='farmers-btn' role='button' aria-pressed='true' target='_blank' href='https://odarecycling.com'>Visit Site</a>       
                    </div>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3} >
                <Card className='project-cards' >
                <Card.Img className='card-image' variant="top" src="./image/LeeAnnProject.png" />
                <Card.Body>
                    <Card.Title>LEEANNTHELABEL</Card.Title>
                    <Card.Text>
                    An E-commerce prototype app build with ReactJs for frontend and NodeJs, express.js and MongoDB for backend.
                    </Card.Text>
                    <div>
                    <a className='farmers-btn' role='button' aria-pressed='true' target='_blank' href='https://github.com/tboytosin/leeann_clothing'>Visit Site</a>       
                    </div>
                </Card.Body>
                </Card>
                </Col>
                
                <Col md={3} >
                <Card className='project-cards'>
                <Card.Img className='card-image' variant="top" src="./image/Postman.png" />
                <Card.Body>
                    <Card.Title>E-commerce Website</Card.Title>
                    <Card.Text>
                    An E-commerce app build with NodeJs framework and express.js.
                    </Card.Text>
                    <div className='mt-5'>
                    <a className='ecommerce-btn mt-4' role='button' aria-pressed='true' target='_blank' href='https://gitlab.com/quinniemaja/capstone2'>Visit Repository</a>
                    </div>
                </Card.Body>
                </Card>
                </Col>
                <Col md={3}>
                <Card  className='project-cards' >
                <Card.Img className='card-image' variant="top" src="./image/mock-proj-2.png" />
                <Card.Body>
                    <Card.Title>BootCamp Projects</Card.Title>
                    <Card.Text>
                    Various Static website using HTML, CSS and Bootstrap.
                    </Card.Text>
                     <div className='bootcamp'>
                    <a className='Bootcamp-btn' role='button' aria-pressed='true' target='_blank' href='https://gitlab.com/quinniemaja'>Visit Repository</a>
                    </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Fragment>
           
        
    
    )
}