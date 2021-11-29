import { React, useRef, useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {RiInstagramFill} from 'react-icons/ri';
import {RiTwitterFill} from 'react-icons/ri';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import imageOne from '../assets/works-preview/1.jpg'

import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    const footerInfosRef = useRef();
    const imgContRef = useRef();

    useEffect(() => {
        gsap.from(footerInfosRef.current, {
            y: 200,
            duration: 0.8,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".footer__infos"
            }
        })
        gsap.from(imgContRef.current, {
            duration: 0.8,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".img-cont"
            }
        })
    });

    return (
        <footer>
            <div className="footer__infos" ref={footerInfosRef}>
                <div className="footer__email">
                    <a href="mailto:hi@rsq.com" className="panel">
                        <h4>Let’s talk.</h4> 
                        <span>hi@rsq.com</span>
                    </a>
                </div>
                <div className="stack">
                    <ul className="footer__social">

                        <li><RiInstagramFill/></li>
                        <li><RiTwitterFill/></li>
                        <li><RiLinkedinBoxFill/></li>
                    </ul>
                    <ul className="footer__cities">
                        <li>Mobile, AL</li>
                        <li>Chicago, IL</li>
                        <li>Tulsa, OK</li>
                    </ul>
                </div>
            </div>
            <div className="img-cont" ref={imgContRef}>
                <img src={imageOne} alt="blured"/>
                <p className="img-cont__work">Work</p>
                <p className="img-cont__all-projects">All Projects</p>


            </div>
        </footer>
    )
}

export default Footer
