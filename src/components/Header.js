import { React, useRef, useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blueCircle from '../assets/circle.png'
import yellowTriangle from '../assets/triangle.png'

import './Header.scss';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // const shapesRef = useRef();
  const  workRef = useRef();
  const circleRef = useRef();
  const triangleRef = useRef();
  const squareRef = useRef();
  const redSquareRef = useRef();

  // const q = gsap.utils.selector(headerShapeRef);

  useEffect(() => {
    gsap.set(circleRef.current, {delay: 1, display:'block'});
    gsap.set(circleRef.current, {delay: 1.3, display:'none'});
    gsap.set(triangleRef.current, {delay: 1.3, display:'block'});
    gsap.set(triangleRef.current, {delay: 1.6, display:'none'});
    gsap.set(squareRef.current, {delay: 1.6, opacity: 1});
    gsap.to(redSquareRef.current, {delay: 1.9, display:'inline-block', duration: 1, opacity: 1, ease: "power1.out"});
    gsap.to(redSquareRef.current, {delay: 4, display:'none', duration: 1, opacity: 0, ease: "power1.out"});

    gsap.from(workRef.current, {delay: 1.6, opacity: 0});
  });
  

  return (
      <nav id="header__nav">
        <div className="header__container">
          <div 
            id="header__logo"
            // ref={headerShapeRef}
          >
            <img src={blueCircle} ref={circleRef} className="header__logo-circle" alt="blue circle"/>
            <img src={yellowTriangle} ref={triangleRef} className="header__logo-triangle" alt="yellow triangle" />
            <a 
              ref={squareRef}
              href="/"
              className="header__logo-square"
            >
              <span ref={redSquareRef}>RedSquare</span>
            </a>
          </div>
          <a
            className="header__link"
            href="https://www.redsquareagency.com/work"
            ref={workRef}
          >Work</a>
        </div>
      </nav>
  );
}

export default Header;