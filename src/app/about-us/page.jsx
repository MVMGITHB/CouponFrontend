import AboutUs from "@/components/aboutUs/AboutUs"


export const metadata = {
  title: 'Who We Are | About CouponsCulture – Your Savings Partner Meet CouponsCulture | Trusted Source for Online Deals',
  description: 'At Coupons Culture, our goal is simple — to help you save. Learn how we find and share the best coupons and deals to make your shopping smarter and cheaper.s',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}

 const page = () => {
  return (
    <div>
       
        
        <AboutUs/>
    </div>
  )
}

export default page
