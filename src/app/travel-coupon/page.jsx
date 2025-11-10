import { Blog } from "../../components/blog/Blog";
import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";

export const metadata = {
  title: "Top Travel Deals & Discounts 2025 | Coupons Culture",
  description:
    "Plan smarter and travel cheaper! Get verified travel coupons and discounts on airfare, hotels, car rentals, and holiday packages – only at Coupons Culture.",
  metadataBase: new URL("https://couponsculture.com"),
  alternates: {
    canonical: "/travel-coupon",
  },
  openGraph: {
    title: "Top Travel Deals & Discounts 2025 | Coupons Culture",
    description:
      "Unlock amazing savings on hotels, flights, and vacation packages. Verified travel coupons to fuel your next adventure.",
    url: "https://couponsculture.com/travel-coupon",
    siteName: "Coupons Culture",
    images: [
      {
        url: "https://couponsculture.com/images/travel1.webp",
        width: 1200,
        height: 630,
        alt: "Travel Discounts Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Smarter with Coupons | Save on Hotels & Flights",
    description:
      "Use exclusive coupons to save on your next trip – airfare, hotels, car rentals, and more. Updated travel deals at Coupons Culture.",
    images: ["https://couponsculture.com/images/travel1.webp"],
  },
};

export default function Page() {
  const images = {
    image1: "/images/travel1.webp",
    image2: "/images/travel2.webp",
    image3: "/images/travel3.webp",
  };

  return (
    <>
      <FashionCoupon slug="travel-coupon" images={images} heading={"Travel Deals for All Your Adventures "}/>
      <Blog url="automobile" />
      
    </>
  );
}
