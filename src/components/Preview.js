import React from 'react'
import imageOne from '../assets/works-preview/1.jpg'

import './Preview.scss';

const Preview = () => {
    return (
        <a href="/">
            <div className="img-cont">
                <div className="image">
                    <img src={imageOne} alt="work 1"/>
                </div>
            </div>
        </a>
    )
}

export default Preview
