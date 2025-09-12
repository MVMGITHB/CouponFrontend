"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";
import Link from "next/link";

const jobs = [
  {
    image1: "/images/MyntraBanner.webp",
    link: "https://www.myntra.com/?utm_source=gh_ht&utm_medium=ht_rev&utm_campaign=gh_ht_listicle50t",
  },
 {
    image1: "/images/FAbanner.webp",
    link: "https://trk.clickgenie.in/click?campaign_id=35873&pub_id=4562&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D",
  },
  {
    image1: "/images/filpkart banner.webp",
    link: "http://fkrt.it/OQCAAqNNNN",
  },
  {
    image1: "/images/ajiobanner.webp",
    link: "https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=couponsculture%20&redirect=https://www.ajio.com/s/50to90percentoff-133938",
  },
  {
    image1: "/images/LeviIBanner.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=520&pub_id=375",
  },
  {
    image1: "/images/McaffieneBanner.webp",
    link: "https://trackback.gotrackier.com/click?campaign_id=32329&pub_id=771&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D",
  },
  {
    image1: "/images/Samsungbanner.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
  {
    image1: "/images/10.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
  {
    image1: "/images/11.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
  {
    image1: "/images/12.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
  {
    image1: "/images/13.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
  {
    image1: "/images/14.webp",
    link: "https://spectrum.gotrackier.com/click?campaign_id=1700&pub_id=376",
  },
];

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
    slidesToShow: 2, // Show 2 on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small tablets and phones
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Phones
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
          className=" hidden md:block cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={10} />
        </button>
        <button
          className=" hidden md:block cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={10} />
        </button>
        <div className="w-full overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {jobs.map((job, index) => (
              <div key={index} className="px-2">
                <Link href={job?.link} target="_blank">
                  <img
                    src={job?.image1}
                    alt="tag"
                    className=" w-[400px]   lg:w-full  object-contain rounded-sm"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Baner;
