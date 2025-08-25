import ThankYou from "../../components/Thankyou.jsx";

export const metadata = {
  title: "Thank You | CouponsCulture",
  description:
    "Thank you for registering at CouponsCulture. Our team will contact you soon.",
  metadataBase: new URL("https://couponsculture.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}

export default Page;
