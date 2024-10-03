import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from "../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MediaCarouselProps {
    mediaItems: MediaItem[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ mediaItems }) => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "slick-dots custom-dots"
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {mediaItems.map((item, index) => (
                    <div key={index} className="outline-none h-80"> {/* Set a fixed height */}
                        {item.type === 'image' ? (
                            <img src={item.url} alt={`Project image ${index + 1}`} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black">
                                <video 
                                    controls 
                                    className="max-w-full max-h-full" 
                                    style={{ objectFit: 'contain' }}
                                >
                                    <source src={item.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
            <button 
                onClick={goToPrev} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={goToNext} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default MediaCarousel;