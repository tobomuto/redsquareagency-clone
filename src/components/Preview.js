import React, { useEffect } from "react";
import imageOne from '../assets/works-preview/1.jpg'
import imageTwo from '../assets/works-preview/2.jpg'
import imageThree from '../assets/works-preview/3.jpg'
import imageFour from '../assets/works-preview/4.jpg'
import imageFive from '../assets/works-preview/5.jpg'
import imageSix from '../assets/works-preview/6.jpg'
import imageSeven from '../assets/works-preview/7.jpg'
import imageHeight from '../assets/works-preview/8.jpg'
import imageNine from '../assets/works-preview/9.jpg'

import './Preview.scss';

const Preview = () => {

    useEffect(() => {

        let itemClass   = 'image';
        let activeClass = 'active';
        let wait        = 300; 
        
        function toggleActive (element, index, maxIndex) {
            setTimeout(function(){
            element.classList.add(activeClass);
            setTimeout(function(){
                element.classList.remove(activeClass);
                if (index === maxIndex) {
                runLoop();
                }
            }, wait);
            }, wait * index);  
        }
        
        function runLoop () {
            let allItems = document.getElementsByClassName(itemClass);
        
            for (let index = 0; index < allItems.length; index++) {
            let element = allItems[index];
            toggleActive(element, index, allItems.length - 1);
            }
        }
        
        runLoop();

    })
    
    return (
        <a href="/">
            <div className="img-container">
                <img className="image active" src={imageOne} alt="work 1"/>
                <img className ="image" src={imageTwo} alt="work 2"/>
                <img className ="image" src={imageThree} alt="work 3"/>
                <img className ="image" src={imageFour} alt="work 4"/>
                <img className ="image" src={imageFive} alt="work 5"/>
                <img className ="image" src={imageSix} alt="work 6"/>
                <img className ="image" src={imageSeven} alt="work 7"/>
                <img className ="image" src={imageHeight} alt="work 8"/>
                <img className ="image" src={imageNine} alt="work 9"/>
            </div>
        </a>
    )
}

export default Preview
