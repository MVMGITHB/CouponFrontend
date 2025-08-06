import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-170 flex items-center justify-center text-center aboutus">
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Helping you shop smarter with verified deals and discounts.
          </p>
        </div>
      </section>

      <section className="py-6 lg:py-8 w-[90%] lg:w-[70%] mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          About Coupons Culture – Your Smart Savings Partner
        </h2>
        <p className="mt-4 text-gray-600 text-justify">
          Welcome to <strong>CouponsCulture.com</strong>, India’s trusted platform for
          finding verified coupons, promo codes, and savings on top categories like
          fashion, electronics, food delivery, travel, and more.
        </p>

        <p className="mt-4 text-gray-600 text-justify">
          Our mission is simple — to help smart shoppers discover the best discounts and
          offers across the web, all in one convenient place.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">What We Offer</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600 text-justify space-y-2">
          <li>Verified and updated coupons daily</li>
          <li>Exclusive deals from top Indian and global brands</li>
          <li>Discounts on fashion, electronics, groceries, travel, and more</li>
          <li>Category-wise deal pages for easy navigation</li>
          <li>User-friendly experience for quick savings</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          Our Popular Categories
        </h2>
        <ul className="list-none mt-4 text-gray-600 text-justify space-y-2">
          <li>
            - <Link href="/fashion-coupon" className="text-blue-600 underline">Fashion</Link> Coupons
          </li>
          <li>
            - <Link href="/electronic-coupon" className="text-blue-600 underline">Electronics</Link> Discounts
          </li>
          <li>
            - <Link href="/food-coupon" className="text-blue-600 underline">Food & Grocery</Link> Offers
          </li>
          <li>
            - <Link href="/travel-coupon" className="text-blue-600 underline">Travel</Link> Deals
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          Why Trust Coupons Culture?
        </h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600 text-justify space-y-2">
          <li>
            <strong>Verified Listings Only:</strong> All coupons and deals are checked regularly.
          </li>
          <li>
            <strong>Zero Spam:</strong> No fake links or expired coupons.
          </li>
          <li>
            <strong>Updated Daily:</strong> Fresh and relevant savings—every day.
          </li>
          <li>
            <strong>Mobile Friendly:</strong> Browse and save from any device.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          Start Saving with Us Today!
        </h2>
        <p className="mt-4 text-gray-600 text-justify">
          Whether you're buying clothes, booking flights, or ordering food—make sure
          you check CouponsCulture.com first. Our goal is to help you save more on
          every purchase.
        </p>
        <p className="mt-4 text-gray-600 text-justify">
          Bookmark{" "}
          <Link href="/" className="text-blue-600 underline">
            CouponsCulture.com
          </Link>{" "}
          and never miss a deal again!
        </p>
      </section>
    </div>
  );
}
