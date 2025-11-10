import FashionCoupon from "../../components/FashionCoupon/FashionCoupon";
import { Blog } from "../../components/blog/Blog";
export const metadata = {
  title: "Top Fashion Discounts 2025 | Clothes, Shoes & More",
  description:
    "Unlock stylish savings with fashion coupons for men, women & kids. Get discounts on clothing, shoes & accessories from popular brands and stores.",
  metadataBase: new URL("https://couponsculture.com"),
  alternates: {
    canonical: "/fashion-coupon", // ✅ Corrected canonical path
  },
  openGraph: {
    title: "Top Fashion Discounts 2025 | Clothes, Shoes & More",
    description:
      "Get the latest fashion coupons and deals on apparel, shoes, and accessories. Save on top brands for men, women, and kids!",
    url: "https://couponsculture.com/fashion-coupon",
    siteName: "Coupons Culture",
    images: [
      {
        url: "https://couponsculture.com/images/fashion3.webp",
        width: 1200,
        height: 630,
        alt: "Fashion Discounts Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Fashion Discounts 2025 | Coupons Culture",
    description:
      "Save big on clothing, footwear, and accessories with our curated fashion coupons. Updated daily on Coupons Culture.",
    images: ["https://couponsculture.com/images/fashion3.webp"],
  },
};

export default function Page() {
  const images = {
    image1: "/images/fashion3.webp",
    image2: "/images/fashion4.webp",
    image3: "/images/fashion1.webp",
  };

  return (
    <>
      <FashionCoupon slug="fashion-coupon" images={images} heading={"Look Good, Spend Less - Fashion Deals You’ll Love"}/>
      <Blog url="fashion-coupon" />
    </>
  );
}
