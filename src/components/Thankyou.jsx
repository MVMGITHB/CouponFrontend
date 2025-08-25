import React from "react";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | CouponsCulture",
  description:
    "Thank you for registering with CouponsCulture. You will receive the latest offers and coupons shortly.",
  metadataBase: new URL("https://couponsculture.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Thankyou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-gray-900 shadow-2xl rounded-3xl p-14 text-center max-w-2xl transform transition-all hover:scale-[1.02]">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <CheckCircle2 className="text-orange-500 w-20 h-20 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-orange-500 mb-5 tracking-tight">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-10 px-2">
          <span className="font-semibold">
            Thank you for registering with us.
          </span>{" "}
          Welcome to CouponsCulture! You will now receive the latest coupons,
          deals, and exclusive offers straight to your inbox. Stay tuned for
          exciting updates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/"
            className="inline-block bg-orange-500 text-black text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Back to Home
          </a>
          <a
            href="/login"
            className="inline-block bg-gray-700 text-white text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition shadow-lg"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
