"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";

const jobs = [
    {
        image1: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f3c0efd7d1d18e69c3900b81410a49e3/banner_home-580x1160.webp?619392",
        image2: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/eb710c1a6f333f59a37bc55a08e461c3/banner_home-580x1160.webp?507035"
    },

    {
        image1: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/dcc082865e7ed689b116fa92f4dcc7fa/banner_home-580x1160.webp?273272",
        image2: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f3c0efd7d1d18e69c3900b81410a49e3/banner_home-580x1160.webp?619392"
    },

    {
        image1: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/eb710c1a6f333f59a37bc55a08e461c3/banner_home-580x1160.webp?507035",
        image2: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f3c0efd7d1d18e69c3900b81410a49e3/banner_home-580x1160.webp?619392"
    },

    {
        image1: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f3c0efd7d1d18e69c3900b81410a49e3/banner_home-580x1160.webp?619392",
        image2: "https://d3pzq99hz695o4.cloudfront.net/sitespecific/in/banner/web/f3c0efd7d1d18e69c3900b81410a49e3/banner_home-580x1160.webp?619392"
    }
]

const Baner = () => {
    const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
        setShowAll((prev) => !prev);
    };

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,         // Show 2 on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,     // Tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,      // Small tablets and phones
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,      // Phones
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };



    return (
        <div className="relative flex justify-center py-4">
            <div className="container1">
             {/* w-[100%] mx-auto px-6 relative  */}
                {/* Carousel Controls */}
                <button
                    className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <FaChevronLeft size={10} />
                </button>
                <button
                    className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <FaChevronRight size={10} />
                </button>
                <div className="w-full overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {jobs.map((job, index) => (
                            <div key={index} className="px-2">
                                <img
                                    src={job?.image1}
                                    alt="tag"
                                    className=" w-[400px]   lg:w-full  object-contain rounded-sm"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>




            </div>
        </div>
    );
};

export default Baner;
