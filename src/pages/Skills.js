import '../styles/Skills.css';

import { Fragment } from "react";
import { Container, Row, Col, ProgressBar} from "react-bootstrap";


export default function Skills() {
	const html = 80;
	const rjs = 60;
	const bootstrap = 75;
	const js = 60;
	const node= 80;
	const ejs = 80;
	const monggo = 70;

	return (
		<Fragment>
		<h1>SKILL-SET</h1>
			<Container fluid>
			<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FRONT-END</th>
      <th scope="col">LEVEL OF EXPERTISE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>HTML & CSS</td>
      <td><ProgressBar now={html} label={`${html}`}/></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bootstrap</td>
      <td><ProgressBar now={bootstrap} label={`${bootstrap}`}/></td>
    </tr>
    <tr>
	<th scope="row">3</th>
      <td>Javascript</td>
      <td><ProgressBar now={js} label={`${js}`}/></td>
    </tr>
	<tr>
	<th scope="row">4</th>
      <td>ReactJS</td>
      <td><ProgressBar now={rjs} label={`${rjs}`}/></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">BACK-END</th>
      <th scope="col">LEVEL OF EXPERTISE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>NodeJS</td>
      <td><ProgressBar now={node} label={`${node}`}/></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ExpressJS</td>
      <td><ProgressBar now={ejs} label={`${ejs}`}/></td>
    </tr>
    <tr>
	<th scope="row">3</th>
      <td>Mongoose/MongoDB</td>
      <td><ProgressBar now={monggo} label={`${monggo}`}/></td>
    </tr>
	<tr>
	<th scope="row">4</th>
      <td>Restful API</td>
      <td><ProgressBar now={js} label={`${js}`}/></td>
    </tr>
  </tbody>
</table>
			
			</Container>
		</Fragment>
	)
}