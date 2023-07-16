import '../styles/Card.css';

import {Fragment} from 'react';
import {Card} from 'react-bootstrap';

export default function Cards({details}) { 
	const {title, sub, content1, content2, content3, content4, content5} = details

	return (
		<Fragment>
		<Card className='card'>
			<Card.Body>
			<Card.Title>{title}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">{sub}</Card.Subtitle>
			<ul>
				{(content2 == null)?
				<Fragment><li className='card-content'>{content1}</li></Fragment>
				:(content3 == null)? <Fragment>
				<li className='card-content'>{content1}</li>
				<li className='card-content'>{content2}</li></Fragment>
				:(content4 == null)? <Fragment>
				<li className='card-content'>{content1}</li>
				<li className='card-content'>{content2}</li>
				<li className='card-content'>{content3}</li></Fragment>
				:<Fragment>
				<li className='card-content'>{content1}</li>
				<li className='card-content'>{content2}</li>
				<li className='card-content'>{content3}</li>
				<li className='card-content'>{content4}</li>
				<li className='card-content'>{content5}</li>
				</Fragment>}		
			</ul>
			</Card.Body>
		</Card>
		</Fragment>
	)
}