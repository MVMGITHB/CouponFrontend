import MainHome from "@/components/Main/MainHome";
import Script from "next/script";

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

   const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shopsmaart",
    url: "https://shopsmaart.com/",
    logo: "https://shopsmaart.com/images/logo.webp",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@shopsmaart.com",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };


  return (
    <>
    <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    <MainHome/>
    </>
  )
}

export default page