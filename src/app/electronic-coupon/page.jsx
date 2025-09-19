import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";


export const metadata = {
  title: 'Top Electronics Deals & Discounts | Coupons Culture',
  description: 'Shop electronics smarter with the best promo codes and discount deals on phones, laptops, smartwatches, and more. Updated daily on Coupons Culture!',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: '/electronics-coupon', // ✅ Correct canonical path
  },
  openGraph: {
    title: 'Top Electronics Deals & Discounts | Coupons Culture',
    description: 'Grab the latest electronics coupons and save big on phones, laptops, gadgets, and more. Hand-picked offers updated daily!',
    url: 'https://couponsculture.com/electronics-coupon',
    siteName: 'Coupons Culture',
    images: [
      {
        url: 'https://couponsculture.com/images/electronic1.webp',
        width: 1200,
        height: 630,
        alt: 'Electronics Discount Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Electronics Deals & Discounts | Coupons Culture',
    description: 'Find the best electronics promo codes and deals on Coupons Culture. Save on phones, laptops, wearables and more.',
    images: ['https://couponsculture.com/images/electronic1.webp'],
  },
};

export default function Page() {
  const images = {
    image1: '/images/electronic1.webp',
    image2: '/images/electronic2.webp',
    image3: '/images/electronic3.webp',
  };

  return (
    <>
     
      <FashionCoupon slug="electronic-coupon" images={images} heading={"Latest Gadgets at Smart Prices That Don’t Break the Bank "}/>
  
    </>
  );
}
