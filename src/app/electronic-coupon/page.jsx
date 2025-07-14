import FashionCoupon from "../../components/FashionCoupon/FashionCoupon"


import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Navbar"


export const metadata = {
  title: 'Top Electronics Deals & Discounts | Coupons Culture  Save on Mobiles, Laptops & More | Electronics Coupons',
  description: 'Shop electronics smarter with the best promo codes and discount deals on phones, laptops, smartwatches, and more. Updated daily on Coupons Culture!',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}


export default function page(){


    const images = {
        image1:'/images/electronic1.webp',
        image2:'/images/electronic2.webp',
        image3:'/images/electronic3.webp'
    }
    return (
        <>
         
        
        <FashionCoupon slug={"electronic-coupon"} images={images}/>
        
       </>
    )
}