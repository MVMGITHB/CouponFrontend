'use client'

import React, { useEffect, useState } from "react";
import Modal1 from '../CouponModal/Modal1'
import axios from 'axios'
import base_url from '../helper/baseurl'
export const OffersSecond = ({slug}) => {



   const [offers, setOffers] = useState([]);
  
    const fetchOffers = async () => {
      try {
        const response = await axios.get(base_url + `/api/coupon/getCouponByCategorySlug/${slug}`);
           const reversedData = response.data.data.reverse();
        // console.log("---data---", response.data.data)
        setOffers(reversedData); 
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchOffers()
    }, [])

    console.log("offer",offers)

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

    // console.log("item",item) 

    const test = {
      code:offer.code,
      website:offer?.website || "https://CouponCulture.com.com/"
   }

   const test1 = {
      title:offer.title,
      code:offer.code,
      website:offer?.website || "https://CouponCulture.com.com/",
      description:offer.description1,
      logo:`${base_url}${offer?.logo}`
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
          

          <div className="grid  w-full md:w-48 gap-4 py-4 mx-auto ">
    {
      offers?.map((item,index)=>{
         return (<>



         {
          item?.code && item?.description1 && item?.discount && item?.logo && item?.website && item?.title &&( <div
      key={index}
      className="bg-gray-300 text-center shadow-lg border border-b-cyan-950 rounded-md p-2 flex flex-col justify-between h-auto md:h-[170px]">
      <img 
       src={`${base_url}${item?.logo}`}
        alt="Fashion" 
        className="w-full h-[50px] object-contain rounded"
      />
      <h4 className="text-white font-semibold text-base mt-2">{item?.discount}</h4>
      <button  onClick={() => handleOpenModal(item)} className="cursor-pointer gettouchcoupon-btn bg-teal-500 hover:bg-teal-600 text-white font-medium text-[13px] px-4 py-2 rounded self-center"> GET THIS COUPON</button>
    </div>)
         }
             
     
         </>)
      })
    }

    {/* Card 2 */}
    

   
  </div>
          </>
    
  );
};
 