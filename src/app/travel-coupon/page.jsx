import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Navbar";


export const metadata = {
  title: 'Top Travel Deals & Discounts 2025 | Coupons Culture',
  description: 'Plan smarter and travel cheaper! Get verified travel coupons and discounts on airfare, hotels, car rentals, and holiday packages – only at Coupons Culture.',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}

export default function page() {

  // travel1.webp
  // travel-coupon

   const images = {
        image1:'/images/travel1.webp',
        image2:'/images/travel2.webp',
        image3:'/images/travel3.webp'
    }
  return (
    <>
      <FashionCoupon slug={"travel-coupon"} images={images}/>
    </>
  );
}
