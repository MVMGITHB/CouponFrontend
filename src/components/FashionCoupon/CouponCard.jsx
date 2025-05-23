'use client'

import React, { useState } from "react";
import Modal1 from '../CouponModal/Modal1'

const CouponCard = ({ heading, data, image, websiteLink }) => {
  const [expanded, setExpanded] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState("");

  const visibleData = expanded ? data : data.slice(0, 2);


//   title , website , code , description , logo
   const handleOpenModal = (offer) => {


    const test = {
      code:"GSTIN",
      website:"https://top5shots.com/"
   }

   const test1 = {
    title:"Exclusive Coupon – Upto 50% OFF + Extra 25% OFF On Jewellery",
    code:"GSTIN",
      website:"https://top5shots.com/",
      description:[
      "Book Round-Trip Domestic Flights And Save Upto 35%.",
      "Valid From Friday To Sunday Every Week.",
      "Maximum Discount Of Rs.6,000 Per Booking.",
      "Offer Valid For All Users.",
      "No Code Needed – Auto Applied At Checkout."
    ],
       logo:"/images/ixigo-coupon-codes.jpg"
   }
    setSelectedOffer(test1);
    setIsModalOpen(true);

    navigator.clipboard.writeText(test.code)
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
  window.open(`/reedem?data=${encodedOffer}`, '_blank');
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


      <div className="gettouchcoupon-card bg-blue-50 rounded shadow-md p-4 flex flex-col sm:flex-row items-start gap-4 w-full max-w-4xl mx-auto  transform transition-transform duration-500 ease-in-out hover:scale-101 hover:rounded hover:shadow-md">
      {/* Popular Ribbon */}
      {/* <div className="absolute top-0 right-0">
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 transform rotate-45 translate-x-6 -translate-y-2">
          POPULAR
        </div>
      </div> */}

      {/* Image */}
      <img
        src={image}
        alt="Coupon"
        className="gettouchcoupon-img w-20 h-20 object-contain"
      />

      {/* Text Content */}
      <div className="gettouchcoupon-content flex-1">
        <h2 className="gettouchcoupon-heading font-semibold text-lg text-gray-800 mb-2">
          {heading}
        </h2>

        <ul className="gettouchcoupon-points list-disc ml-5 text-sm text-gray-700 space-y-1">
          {visibleData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Show More Button */}
        {data.length > 2 && (
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

      <button  onClick={() => handleOpenModal({image})} className="cursor-pointer gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded self-center"> GET THIS COUPON</button>


     
    </div>
      
      
      </>
    

  );
};

export default CouponCard;
