import PopularMain from '@/components/popularBrand/PopularMain';
import React from 'react';
import Popup from '../../../components/popup/Popup';

const PopularBrand = {
  flipkart: {
    title: "Flipkart",
    desc: "High Style,<br/>High Saving<br/>Your Fashion<br/>Sale Starts Here!",
    banner: "/popularbrand/Frame72.png",
    image1 :"/popularbrand/Frame84.png" , 
    image2 : "/popularbrand/Frame86.png"
  },
  ajio: {
    title: "Ajio",
    desc: "Gadgets<br/> You’ll Love,<br/> Prices <br/> You’ll Love More.",
    banner: "/popularbrand/Ajionewbanner09oct.png",
    image1 :"/popularbrand/Svara.png" , 
    image2 : "/popularbrand/Levi.png"
  },
  levis: {
    title: "Levis's",
    desc: "Delicious <br/> Deals <br/> in Every Bite",
    banner: "/popularbrand/levis1.png",
     image1 :"/popularbrand/levis2.png" , 
    image2 : "/popularbrand/levis3.png"
  },
  myntra: {
    title: "Myntra",
    desc: "Discover <br/> Top Beauty <br/> Brands <br/> and  Products.",
    banner: "/popularbrand/myntra1.png",
     image1 :"/popularbrand/myntra2.png" , 
    image2 : "/popularbrand/myntra3.png"
  },
  markspencer: {
    title: "Mark Spencer",
    desc: "Save <br/> on your <br/> next travel <br/> booking.",
    banner: "/popularbrand/Frame72.png",
    image1 :"/popularbrand/Frame84.png" , 
    image2 : "/popularbrand/Frame86.png"
  },
};

const page = async({ params }) => {
//   console.log("params =>", params);
  const {slug} =  await params;

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
      <PopularMain data={data} slug={slug} />
      <Popup/>
    </div>
  );
};

export default page;
