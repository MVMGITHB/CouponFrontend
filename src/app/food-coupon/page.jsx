import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Navbar";


export const metadata = {
  title: 'Restaurant & Grocery Coupons 2025 | Save on Food Online',
  description: 'Find delicious deals on food delivery, restaurants, snacks, and groceries. Enjoy exclusive discounts with CouponsCulture.com!',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}
export default function page() {

    const images = {
        image1:'/images/food1.webp',
        image2:'/images/food2.webp',
        image3:'/images/food3.webp'
    }
  return (
    <>
      <FashionCoupon slug={"food-coupon"} images={images}/>
    </>
  );
}
