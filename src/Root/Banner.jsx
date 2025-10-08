import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/img3.0.png"

import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={1000} autoFocus={true} showThumbs={false} >
            <div className='my-5 w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden'>
                <img className='rounded-4xl lg:min-h-screen' src={img1} />

            </div>
            <div className='my-5'>
                <img className='rounded-4xl lg:min-h-screen w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden' src={img2} />

            </div>
            <div className='my-5'>
                <img className='rounded-4xl lg:min-h-screen w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden' src={img3} />
            </div>
        </Carousel>
    );
};

export default Banner;