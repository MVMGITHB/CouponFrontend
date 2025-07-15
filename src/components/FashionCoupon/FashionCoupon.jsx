import { Fashion } from "./Fashion";
import { OfferSection } from "./OfferSection";
import { Offers } from "./Offers";
import { OffersSecond } from "./OffersSecond";

export default function FashionCoupon({slug,images}) {
  return (
    <div className="bg-gray-50 ">

      <div className="max-w-[1400px] mx-auto px-[10px]">
        <Fashion images={images} />
      <div className="flex flex-col md:flex-row lg:flex-row mx-auto lg:items-start gap-6">
        <OfferSection />
        <Offers slug={slug}/> 
        <OffersSecond />
      </div>
      </div>
      
    </div>
  );
}
