import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";


export const metadata = {
  title: 'Restaurant & Grocery Coupons 2025 | Save on Food Online',
  description:
    'Find delicious deals on food delivery, restaurants, snacks, and groceries. Enjoy exclusive discounts with CouponsCulture.com!',
  metadataBase: new URL('https://couponsculture.com'),
  alternates: {
    canonical: '/food-coupon', // ✅ Correct canonical URL
  },
  openGraph: {
    title: 'Restaurant & Grocery Coupons 2025 | Save on Food Online',
    description:
      'Get the latest discounts on restaurants, snacks, and groceries. Save big with exclusive food offers on CouponsCulture.com.',
    url: 'https://couponsculture.com/food-coupon',
    siteName: 'Coupons Culture',
    images: [
      {
        url: 'https://couponsculture.com/images/food1.webp',
        width: 1200,
        height: 630,
        alt: 'Food Discounts Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Save on Food with Top Coupons | Coupons Culture 2025',
    description:
      'Unlock savings on your favorite food brands and restaurants. Updated grocery and delivery coupons just for you.',
    images: ['https://couponsculture.com/images/food1.webp'],
  },
};

export default function Page() {
  const images = {
    image1: '/images/food1.webp',
    image2: '/images/food2.webp',
    image3: '/images/food3.webp',
  };

  return (
    <>

      <FashionCoupon slug="food-coupon" images={images} />
   
    </>
  );
}
