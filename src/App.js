
// import {Fragment} from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
// pages
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';



function App() {


  return (
  	<Router>
  		<Routes>
  			<Route exact path='/' element={<About/>}/>
  			<Route exact path='/about' element={<About/>}/>
  			<Route exact path='/projects' element={<Projects/>}/>

  		</Routes>
  		<Footer fixed="bottom"/>
  	</Router>


  );
}

export default App;
