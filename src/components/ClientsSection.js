import { React, useRef, useEffect } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './ClientsSection.scss'

import clientsJson from '../assets/datas/clientsList.json'

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {

    const clientsListsRef = useRef();
    const dividerRef = useRef();

    useEffect(() => {
        gsap.from(clientsListsRef.current, {
            x: -200,
            duration: 0.8,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".clients-section__lists"
            }
        })
        gsap.from(dividerRef.current, {
            scaleX:0, transformOrigin:'left center',
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: dividerRef.current
            }
        })
    });

    return (
        <section id="clients-section">
            <div className="clients-section__container">
                <h3>Select Clients</h3>
                <div className="clients-section__lists" ref={clientsListsRef}>
                    <ul> 
                        {clientsJson.filter(client => client.group === 1).map(client => 
                            <li key={client.id}>{client.name}</li>
                        )}
                    </ul>
                    <ul> 
                        {clientsJson.filter(client => client.group === 2).map(client => 
                            <li key={client.id}>{client.name}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="divider" ref={dividerRef}></div>
        </section>
    )
}

export default ClientsSection
