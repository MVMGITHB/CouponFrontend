import Link from 'next/link';

import Image from 'next/image';

export const RightSide = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Ads Section */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">
        <Image
          src="https://mvmbs.com/images/bjj2.webp"
          alt="Advertisement"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
        <Image
  src="https://mvmbs.com/images/bjj2.webp"
  alt="Advertisement"
  width={1920}       // replace with actual image width
  height={1080}      // replace with actual image height
  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
/>
        </Link>
      </div>

      {/* Top News Section */}
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
         <Link href="http://trk.yasd.in/click?campaign_id=166&pub_id=945" target="_blank">
        <Image
          src="https://mvmbs.com/images/bjj1.webp"
          alt="Top News"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
                </Link>
      </div>
    </div>
  );
};
