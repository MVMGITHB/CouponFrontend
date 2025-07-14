import FashionCoupon from "../../components/FashionCoupon/FashionCoupon"
export const metadata = {
  title: 'Top Fashion Discounts 2025 | Clothes, Shoes & More',
  description: 'Unlock stylish savings with fashion coupons for men, women & kids. Get discounts on clothing, shoes & accessories from popular brands and stores.',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}

import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Navbar"
export default function page(){

    const images = {
        image1:'/images/fashion3.webp',
        image2:'/images/fashion4.webp',
        image3:'/images/fashion1.webp'
    }
    return (
        <>
           <FashionCoupon slug={"fashion-coupon"} images={images}/>
       </>
    )
}