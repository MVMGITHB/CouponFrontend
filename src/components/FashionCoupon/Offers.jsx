

'use client'
import { useState,useEffect } from "react";
import CouponCard from "./CouponCard";
import axios from 'axios'
import base_url from '../helper/baseurl'



export const Offers = ({slug}) => {
  

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

 

//   const couponData = [
//   {
//     heading: "Exclusive Coupons – Upto 30% (Upto Rs.5,000) New User Off On Domestic & International Flights",
//     data: [
//       "Get Upto 30% Coupon Off On Domestic & International Flight Bookings On Ixigo.",
//       "No Minimum Booking Amount Required To Avail The Offer.",
//       "Max Discount Of Rs.5,000 Can Be Availed.",
//       "Offer Valid For New Users Only.",
//       "Discount May Vary From Flights."
//     ],
//     image: "/images/ixigo-coupon-codes.jpg",
//     websiteLink: "https://www.couponzguru.com/trip-india-domestic-flight-coupon-code/"
//   },
//   {
//     heading: "Special Fare Offer – Flat 25% Off On All Domestic Flights For New Users",
//     data: [
//       "Avail Flat 25% Discount On Your First Flight Booking.",
//       "Applicable On All Domestic Airlines.",
//       "Max Discount Of Rs.3,000 Per Booking.",
//       "Offer Only For New Registered Users.",
//       "Use Code: FLYNEW25 At Checkout."
//     ],
//     image: "/images/Air-India-Logo.jpg",
//     websiteLink: "https://www.couponzguru.com/flight-deals/"
//   },
//   {
//     heading: "Student Special – Upto 20% Off + Extra Baggage On Domestic Flights",
//     data: [
//       "Students Can Avail Upto 20% Off On Domestic Flights.",
//       "Additional 10Kg Baggage Allowance Included.",
//       "Valid Student ID Must Be Provided.",
//       "Applicable On Select Airlines Only.",
//       "Limited Period Offer."
//     ],
//     image: "/images/Airasia-coupons-codes-1.jpg",
//     websiteLink: "https://www.couponzguru.com/student-flight-offers/"
//   },
//   {
//     heading: "International Getaway – Flat Rs.4,000 Off On First Booking",
//     data: [
//       "Flat Rs.4,000 Discount On International Flight Booking.",
//       "No Promo Code Required.",
//       "Valid Only On Select Routes.",
//       "Offer Applicable Once Per User.",
//       "Limited Time Offer, Book Now!"
//     ],
//     image: "/images/almatar-coupon-codes.jpg",
//     websiteLink: "https://www.couponzguru.com/international-flight-coupons/"
//   },
//   {
//     heading: "Weekend Sale – Upto 35% Off On Round-Trip Domestic Flights",
//     data: [
//       "Book Round-Trip Domestic Flights And Save Upto 35%.",
//       "Valid From Friday To Sunday Every Week.",
//       "Maximum Discount Of Rs.6,000 Per Booking.",
//       "Offer Valid For All Users.",
//       "No Code Needed – Auto Applied At Checkout."
//     ],
//     image: "/images/Travala-coupon-codes.jpg",
//     websiteLink: "https://www.couponzguru.com/flight-coupon-code-offers/"
//   }
// ];



  return (
    <div className="flex flex-col gap-[30px] pt-[15px] h-auto md:h-[740px] gettouch-hide-scrollbar overflow-y-auto ">

      {/* {offers.map((_, idx) => (
        <div key={idx} className="w-full lg:w-[53rem] h-40 bg-red-200 rounded-lg shadow-md p-4 m-4 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full h-full">

           

           
            <div className="bg-amber-900 rounded-lg overflow-hidden">
              <img
                src="https://fabrikbrands.com/wp-content/uploads/Software-Company-Logos-3-1200x750.png"
                alt="Offer"
                className="w-full h-full object-cover"
              />
            </div>


            
            <div className="grid grid-rows-3 gap-2 text-center text-2xl">
              <div className="bg-emerald-600 rounded">Offer</div>
              <div className="bg-emerald-600 rounded">Offer</div>
              <div className="bg-emerald-600 rounded">Offer</div>
            </div>

            
            <div className="flex justify-center items-center">
              <button className="text-white text-xl sm:text-2xl bg-black px-4 py-2 rounded hover:bg-gray-800 transition">
                Get Offer
              </button>
            </div>

          </div>
        </div>
      ))} */}

     {offers.map((coupon, index) => (
        <CouponCard key={index}  coupon={coupon} />
      ))}
      
    </div>
  );
};
