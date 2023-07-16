import {Link} from 'react-router-dom';

// css
import '../styles/Footer.css';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
	return (
		<div className = 'Footer'>
			<div className="Footer-icon-box">
			<a href="https://www.linkedin.com/in/tosin-ibiwoye-4aaa1b85/"><FontAwesomeIcon className='Footer-icons' icon={faLinkedinIn}/></a>
			<a href="https://github.com/tboytosin"><FontAwesomeIcon className='Footer-icons' icon={faGithub} /></a>
			</div>
		</div>

	)
}