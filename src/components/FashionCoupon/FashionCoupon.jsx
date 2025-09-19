import { Fashion } from "./Fashion";
import { OfferSection } from "./OfferSection";
import { Offers } from "./Offers";
import { OffersSecond } from "./OffersSecond";

export default function FashionCoupon({slug,images,heading}) {
  return (
    <div className="bg-gray-50 ">

      <div className="max-w-[1400px] mx-auto px-[10px]">
        <Fashion images={images} />

        <h1 className="text-center text-black text-3xl md:text-5xl font-bold py-5">{heading}</h1>

      <div className="flex flex-col md:flex-row lg:flex-row mx-auto lg:items-start gap-6">
        <OfferSection slug={slug} />
        <Offers slug={slug}/> 
        <OffersSecond slug={slug}/>
      </div>
      </div>
      
    </div>
  );
}
