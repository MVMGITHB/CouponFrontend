'use client'

import React, { useState } from "react";
import Modal1 from '../CouponModal/Modal1'

export const OfferSection = () => {

const data = [
  {
  image:"/images/ixigo-coupon-codes.jpg",
  offer:"30% off",
  link:"#"
},

  {
  image:"/images/Air-India-Logo.jpg",
  offer:"20% off",
  link:"#"
},


  {
  image:"/images/Airasia-coupons-codes-1.jpg",
  offer:"10% off",
  link:"#"
},


  {
  image:"/images/almatar-coupon-codes.jpg",
  offer:"15% off",
  link:"#"
},

]


   const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState("");
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

    <><Modal1
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            offer={selectedOffer}
    
            
          />
          

          <div className="grid grid-rows-3 w-full sm:w-48 gap-4 py-4 mx-auto ">
    {
      data?.map((item,index)=>{
         return (<>
             
      <div className="bg-gray-300 text-center shadow-lg border border-b-cyan-950 rounded-md p-2 flex flex-col justify-between h-auto md:h-[170px]">
      <img 
        src={item?.image}
        alt="Fashion" 
        className="w-full h-auto object-cover rounded"
      />
      <h1 className="text-white font-semibold text-base mt-2">{item?.offer}</h1>
      {/* <a
        href={item?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium text-[13px] px-4 py-2 rounded self-center"
      >
        GET THIS COUPON
      </a> */}


      <button  onClick={() => handleOpenModal({data})} className="cursor-pointer gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium text-[13px] px-4 py-2 rounded self-center"> GET THIS COUPON</button>
    </div>
         </>)
      })
    }

    {/* Card 2 */}
    

   
  </div>
          </>
    
  );
};
 