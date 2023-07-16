import {Fragment} from 'react';
import Cards from '../components/Card';

export default function Experience () {

	const education1 = {
		title: 'UDEMY',
		sub: 'January 2022 - March 2022',
		content1: 'Python'
	}

const education2 = {
		title: 'UDEMY',
		sub: 'March 2022 - May 2022',
		content1: 'Web design and Development.'
		
	}

	const education3 = {
		title: 'University of Lagos',
		sub: 'October 2016 - June 2019',
		content1: 'M.Sc. Electrical and Electronics Engineering'
		
	}

	const education4 = {
		title: 'University of Ilorin',
		sub: 'October 2007 - June 2012',
		content1: 'B.Eng Electrical and Electronics Engineering'
		
	}

	return (
		<Fragment>
			<Cards details={education1}/>
			<Cards details={education2}/>
			<Cards details={education3}/>
            <Cards details={education4}/>
		</Fragment>

	)
}