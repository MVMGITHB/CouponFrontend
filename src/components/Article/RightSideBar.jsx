import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import AnimatedLink1 from './AnimatedLink1';

import Image from 'next/image';

export const RightSideBar = ({ pathname,data }) => {

  const data1 = [
    "Get",
    "Free Gift Voucher",
    "Free Lounge Access",
    "Benefits Of 1,21,799",
  
  ]
  return (
    <div className="w-full flex flex-col gap-6 p-2">
      {/* <div className="w-full bg-white shadow-md rounded-xl overflow-hidden">



        {
          data?.Ads[1] ? (<>
                      <AnimatedLink1
                        text={data?.Ads[1].text1}
                        link={data?.Ads[1].link1}
                        apply={data?.Ads[1].text2}
                      />
          
                    </>) :(<>
                    
        {pathname === '/automobile/fastag-annual-pass' ? (
          <AnimatedLink
            text={"Increased Offer Generated For Your Old Car, Bid Valid For Two Hours Only"}
            link="https://www.cars24.com/sell-marketing/?utm_source=affiliate&utm_medium=email_ob&utm_campaign=mv2341&utm_term=super01"
            apply={"Get Price"}
          />
        ) : (
         <AnimatedLink1
            text={data1}
            link="https://trk.clickgenie.in/click?campaign_id=34900&pub_id=5742&p1=%7Byour-transaction-id%7D&source=%7Byour-sub-aff-id%7D"
            apply={"Get Price"}
          />
        )}
                    </>)
        }


      </div> */}

      <div className="bg-white shadow-md rounded-xl overflow-hidden">

        {pathname === '/automobile/fastag-annual-pass' ? (
          <>
          
            <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
          >


           <Image
  src="/ajionew.webp"
  alt="Tata Neu Event"
  width={1920}      // replace with actual image width
  height={480}      // replace with actual image height
  className="w-full h-[480px] object-cover rounded-md"
  priority
/>
          </Link>
          </>
        ) : (
            <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
          >
               <Image
  src="/ajionew.webp"
  alt="Tata Neu Event"
  width={1920}      // replace with actual image width
  height={480}      // replace with actual image height
  className="w-full h-[480px] object-cover rounded-md"
  priority
/>
          </Link>
        )}

      </div>
    </div>
  );
};
