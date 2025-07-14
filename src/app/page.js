import MainHome from "@/components/Main/MainHome";

export const metadata = {
  title: 'Top Deals & Coupons 2025 | CouponsCulture.com',
  description: 'Get the best discounts and exclusive coupon codes from leading stores. Shop smart and save more with CouponsCulture.com!',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: './',
  },

  //  
}

function page() {
  return (
    <>
    <MainHome/>
    </>
  )
}

export default page