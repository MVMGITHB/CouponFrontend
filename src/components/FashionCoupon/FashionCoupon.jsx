import { Fashion } from "./Fashion";
import { OfferSection } from "./OfferSection";
import { Offers } from "./Offers";
import { OffersSecond } from "./OffersSecond";

export default function FashionCoupon() {
  return (
    <div className="bg-black ">

      <div className="max-w-[1400px] mx-auto px-[10px]">
        <Fashion />
      <div className="flex flex-col md:flex-row lg:flex-row mx-auto lg:items-start gap-6">
        <OfferSection />
        <Offers /> 
        <OffersSecond />
      </div>
      </div>
      
    </div>
  );
}
