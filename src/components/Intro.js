import { React, useRef, useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Intro.scss';

gsap.registerPlugin(ScrollTrigger);

export const Intro = () => {

    const sentenceRef = useRef();
    const q = gsap.utils.selector(sentenceRef);

    useEffect(() => {
        gsap.from(q(".word"), {delay: 1.9, opacity: 0, duration: 0.5, stagger: 0.2, ease: "power1.out"});
        gsap.from(sentenceRef.current, {delay: 3.6, transform: 'translate3d(0,20vh,0)', ease: "power1.out", duration: 1});
    });

    return (
        <div id="intro__hero">
            <h1 ref={sentenceRef}>
            <span className="word">The </span><span  className="word">agency</span> <br/> <span  className="word">what</span> <span  className="word">comes</span> <span  className="word">next.</span>
            </h1>
        </div>
    )
}

export default Intro;