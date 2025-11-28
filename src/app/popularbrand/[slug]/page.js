import PopularMain from "@/components/popularBrand/PopularMain";
import Script from "next/script";
import React from "react";
import Popup from "../../../components/popup/Popup";

const PopularBrand = {
  flipkart: {
    title: "Flipkart",
    desc: "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!",
    banner: "/popularbrand/Frame72.png",
    image1: "/popularbrand/Frame84.png",
    image2: "/popularbrand/Frame86.png",
  },
  ajio: {
    title: "Ajio",
    desc: "Gadgets<br/> You’ll Love,<br/> Prices <br/> You’ll Love More.",
    banner: "/popularbrand/ajiobannernew.png",
    image1: "/popularbrand/USpolioassnkids.png",
    image2: "/popularbrand/ajioredtapebanner.png",
  },
  levis: {
    title: "Levis's",
    desc: "Delicious <br/> Deals <br/> in Every Bite",
    banner: "/popularbrand/levis1.png",
    image1: "/popularbrand/levis2.png",
    image2: "/popularbrand/levis3.png",
  },
  myntra: {
    title: "Myntra",
    desc: "Discover <br/> Top Beauty <br/> Brands <br/> and  Products.",
    banner: "/popularbrand/myntra1.png",
    image1: "/popularbrand/myntra2.png",
    image2: "/popularbrand/myntra3.png",
  },
  markspencer: {
    title: "Mark Spencer",
    desc: "Save <br/> on your <br/> next travel <br/> booking.",
    banner: "/popularbrand/Frame72.png",
    image1: "/popularbrand/Frame84.png",
    image2: "/popularbrand/Frame86.png",
  },
};

const page = async ({ params }) => {
  const { slug } = await params;
  const data = PopularBrand[slug];

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Brand not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Load pixel only for Ajio */}
      {slug === "ajio" && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '797084170021217');
              fbq('track', 'PageView');
            `}
          </Script>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=797084170021217&ev=PageView&noscript=1"
            />
          </noscript>
        </>
      )}

      <PopularMain data={data} slug={slug} />
      <Popup />
    </div>
  );
};

export default page;
