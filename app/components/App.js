import React, { Component } from 'react'
//import { Link } from 'react-router'
import { styles } from '../style/app.scss'
import Home from './Home'
import About from './About'
import Services from './Services'
import Scroll from 'react-scroll'

var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {
    // componentDidMount() {

    //     Events.scrollEvent.register('begin', function () {
    //         console.log("begin", arguments);
    //     });

    //     Events.scrollEvent.register('end', function () {
    //         console.log("end", arguments);
    //     });

    //     scrollSpy.update();

    // }
    // scrollToTop() {
    //     scroll.scrollToTop();
    // }

    // componentWillUnmount() {
    //     Events.scrollEvent.remove('begin');
    //     Events.scrollEvent.remove('end');
    // }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link></li>                        
                        <li><Link activeClass="active" to="services" spy={true} smooth={true} duration={500}>Services</Link></li>
                    </ul>
                </div>
                <Element name="home">
                    <Home></Home>
                </Element>
                <Element name="about">
                    <About></About>
                </Element>
                <Element name="services">
                    <Services></Services>
                </Element>
            </div>
        );
    }
}

export default App
