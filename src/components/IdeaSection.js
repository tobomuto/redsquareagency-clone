import { React, useRef, useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './IdeaSection.scss'

gsap.registerPlugin(ScrollTrigger);

const IdeaSection = () => {

    const ideaTitleRef = useRef();
    const ideaParaRef = useRef();

    useEffect(() => {
        gsap.from(ideaTitleRef.current, {
            y: 200,
            duration: 0.8,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".idea-section__title"
            }
        })
        gsap.from(ideaParaRef.current, {
            y: 100,
            delay: 0.4,
            duration: 0.8,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".idea-section__paragraph"
            }
        })
    });

    return (
        <section id="idea-section" >
            <h2 className="idea-section__title" ref={ideaTitleRef}>
                We deal in ideas, design and media that are category defying. When the world Millis, you’ve got to Vanilli.
            </h2>
            <p className="idea-section__paragraph" ref={ideaParaRef}>
                Red Square believes in rigorous development of brand strategy and whip-smart execution. We make all sorts of things. Things that move markets, compel audiences and sell product. We help great brands create what comes next.
            </p>
            <div className="divider"></div>
        </section>
    )
}

export default IdeaSection
