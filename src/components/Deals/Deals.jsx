"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../helper/baseurl";
import Modal from "../CouponModal/Modal1";
import Image from "next/image";

export default function Deals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState("");

  const [deals, setDeals] = useState([]);

  const fetchOffers = async () => {
    try {
      const response = await axios.get(base_url + `/api/dealOnFire/getAll`);
      setDeals(response.data[0].coupon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // const handleOpenModal = (offer) => {
  //   setSelectedOffer(offer);
  //   setIsModalOpen(true);

  //   navigator.clipboard.writeText(offer.code)
  //   .then(() => {
  //     console.log("Code copied:", offer.code);
  //   })
  //   .catch((err) => {
  //     console.error("Failed to copy code:", err);
  //   });

  //  const test = {
  //     code:offer?.code,
  //     website:offer?.website
  //  }

  // // Open the redeem page in a new tab

  // // const encodedOffer = encodeURIComponent(JSON.stringify(offer));
  // // window.open(`/reedem?data=${encodedOffer}`, '_blank');


  // const encodedOffer = encodeURIComponent(btoa(JSON.stringify(test)));
  // window.open(`/reedem?data=${encodedOffer}`, '_blank');
  // };


   const handleOpenModal = (offer) => {

 

    const test = {
      code:offer?.code,
      website:offer?.website
   }

   const test1 = {
    title:offer?.title,
    code:offer?.code,
      website:offer?.website,
      description:offer?.description1,
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
    <div className="py-12 ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        🎉 Deals on Fire
      </h2>

      <div className="max-w-[1400px] mx-auto px-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {deals.slice(0,10).map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform duration-300"
            >
                <Image
               src={`${base_url}${deal?.logo}`}
                alt={`Offer ${index + 1}`}
                width={128}
                height={64}
                className="object-contain mb-4"
              />
              <p className="text-gray-700 mb-6 text-[1.2rem] line-clamp-3">
                {deal.title}
              </p>
              <button
                className="mt-auto px-5 py-2 bg-black cursor-pointer text-white rounded-xl hover:bg-gray-800 transition"
                onClick={() => handleOpenModal(deal)}
              >
                Get Coupon
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5">
        <img
          src="/images/banner.webp"
          alt="Offer-banner"
          className="w-screen object-cover"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        offer={selectedOffer}
      />
    </div>
  );
}
