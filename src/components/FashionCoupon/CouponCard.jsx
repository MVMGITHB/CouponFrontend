"use client";

import React, { useState } from "react";
import Modal1 from "../CouponModal/Modal1";
import base_url from "../helper/baseurl";
import Link from "next/link";    

const CouponCard = ({ coupon }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");
  const [isActivated, setIsActivated] = useState(false);


  const visibleData = expanded
    ? coupon?.description1
    : coupon?.description1.slice(0, 2);

  //   title , website , code , description , logo
  const handleOpenModal = (offer) => {
    const test = {
      code: coupon?.code,
      website: coupon?.website,
    };

    const test1 = {
      title: coupon?.title,
      code: coupon?.code,
      website: coupon?.website,
      description: coupon?.description1,
      logo: `${base_url}${coupon?.logo}`,
    };
    setSelectedOffer(test1);
    setIsModalOpen(true);

    navigator.clipboard
      .writeText(test.code)
      .then(() => {
        console.log("Code copied:", test.code);
      })
      .catch((err) => {
        console.error("Failed to copy code:", err);
      });

    // Open the redeem page in a new tab

    // const encodedOffer = encodeURIComponent(JSON.stringify(offer));
    // window.open(`/reedem?data=${encodedOffer}`, '_blank');

    const encodedOffer = encodeURIComponent(btoa(JSON.stringify(test)));
    window.open(`/reedem?data=${encodedOffer}`, "_blank");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOffer("");
  };

  return (
    <>
      <Modal1
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        offer={selectedOffer}
      />

      <div className="gettouchcoupon-card bg-blue-50 rounded shadow-lg p-4 flex flex-col sm:flex-row items-start gap-4 w-full max-w-4xl mx-auto  transform transition-transform duration-500 ease-in-out hover:scale-101 hover:rounded hover:shadow-md">
        {/* Popular Ribbon */}
        {/* <div className="absolute top-0 right-0">
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 transform rotate-45 translate-x-6 -translate-y-2">
          POPULAR
        </div>
      </div> */}

        {/* Image */}
        <img
          src={`${base_url}${coupon?.logo}`}
          alt="Coupon"
          className="gettouchcoupon-img w-20 h-20 object-contain"
        />

        {/* Text Content */}
        <div className="gettouchcoupon-content flex-1">
          <h2 className="gettouchcoupon-heading font-semibold text-lg text-gray-800 mb-2">
            {coupon?.title}
          </h2>

          <ul className="gettouchcoupon-points list-disc ml-5 text-sm text-gray-700 space-y-1">
            {visibleData &&
              visibleData.length > 0 &&
              visibleData.map((item, index) => <li key={index}>{item}</li>)}
          </ul>

          {/* Show More Button */}
          {coupon?.description1 && coupon?.description1?.length > 2 && (
            <button
              className="gettouchcoupon-readmore text-blue-600 text-sm mt-2"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less <<" : "Show More >>"}
            </button>
          )}
        </div>

        {/* Get Coupon Button */}
        {/* <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded self-center"
      >
        GET THIS COUPON
      </a> */}

       {coupon?.code ? (
  <button
    onClick={() => {
      setIsActivated(true);
      handleOpenModal({ coupon });
    }}
    className="cursor-pointer gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded self-center"
  >
    {isActivated ? "Deal Activated" : "GET OFFER"}
  </button>
) : (
  <button
    onClick={() => {
      setIsActivated(true);
      handleOpenModal({ coupon })
      window.open(coupon?.website, "_blank");
    }}
    className="cursor-pointer gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded self-center"
  >
    {isActivated ? "Deal Activated" : "GET OFFER"}
  </button>
)}

      </div>
    </>
  );
};

export default CouponCard;
