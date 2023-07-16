import {Fragment} from 'react';
import Cards from '../components/Card';

export default function Experience () {

	const experience1 = {
		title: 'Lead Developer at TOP EXPLORA',
		sub: 'Key Role:',
		content1: 'Ensure project deadlines are met',
		content2: 'Built website for a waste management company ODARECYCLING',
		content3: 'Built website for an ecommerce company LEEANNTHELABEL',
		content4: 'Ensure daily standup',
		content5: 'Support the product owner in effective delivery of projects and within timeline'
	}

const experience2 = {
		title: 'Platform Analysis and Monitoring Specialist',
		sub: 'Key Role: DATA ANALYST AND DATABASE ADMINISTRATOR',
		content1: 'Automatic detection of customers with bypass using framework like plotly in Python',
		content2: 'Generating scripts for user departments',
		content3: 'Teamlead in a team that built an API for real time meter data collection for government use',
		content4: 'Publishing weekly and monthly reports on NMD and MD customers with potential bypass',
		content5: 'The automatic meter bypass escalations generate over #100,000,000 monthly revenue to the organization'
	}

	const experience3 = {
		title: 'Freelance - Full Stack Developer',
		sub: 'Key Role:',
		content1: 'Designed e-commerce website for clothing line - Rumpstore',
		content2: 'Built an API integration platform',
		content3: 'Build a food order app'
	}

	return (
		<Fragment>
			<Cards details={experience1}/>
			<Cards details={experience2}/>
			<Cards details={experience3}/>
		</Fragment>

	)
}