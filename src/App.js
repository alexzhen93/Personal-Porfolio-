import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Alex Zhen',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hi, my name is Alex Zhen',
        subTitle: 'Projects that makes a difference',
        text: 'Checkout my projects below',
        titel2: 'Projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} style={{backgroundColor:"#121212", color:"white"}}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Nav className="ml-auto">
              <Link className="nav-link"  style={{color:"white"}} to="/">Alex Zhen</Link>
              </Nav>
              </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" style={{color:"white"}} to="/">Home</Link>
                <Link className="nav-link" style={{color:"white"}} to="/about">About</Link>
                {/* <Link className="nav-link" to="/contact">Contact</Link>  */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} title2={this.state.home.titel2} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
