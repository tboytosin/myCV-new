import '../styles/CardProfile.css';


import {useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faMobileAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export default function CardProfile () {

	return (
		<Card>
		  <Card.Img className='profile mx-auto' variant="top" src="./image/tosinPassport.jfif" />
		  <Card.Body className='profile_details'>
		    <Card.Title className='Name'>Tbillz</Card.Title>
		    <Card.Text><FontAwesomeIcon icon={faEnvelope}/> mostowall@gmail.com</Card.Text>
		    <Card.Text><FontAwesomeIcon icon={faMobileAlt}/> (+234) 706-8056-831</Card.Text>
		    <Card.Text><FontAwesomeIcon icon={faMapMarkerAlt}/> Ilasa, Lagos, Nigeria</Card.Text>
		    <a role='button' className="cv-button" aria-pressed='true' href='https://docs.google.com/document/d/1cg_nxTXzeFrm9a4HWSTsgLucmOvDNwMv/edit?usp=sharing&ouid=116459040631322494424&rtpof=true&sd=true' target='_blank'>My Curriculum Vitae</a>
		    <div className='ms-5'>
			<a href="https://github.com/tboytosin" target='_blank'><FontAwesomeIcon icon={faGithub} className='profile-icon'/></a>
		    	<a href="https://www.linkedin.com/in/tosin-ibiwoye-4aaa1b85/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='profile-icon'/></a>
		    </div>

		  </Card.Body>
		</Card>
	)
}