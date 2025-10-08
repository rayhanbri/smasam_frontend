import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../assets/image1.png"

const Banner = () => {
    return (
            <div className='my-5'>
                <img className='w-full rounded-lg' src={img1} />

            </div>
    );
};

export default Banner;