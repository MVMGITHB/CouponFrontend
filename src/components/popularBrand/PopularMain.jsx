"use client"
import React, { useEffect, useState } from 'react'

import PopularHero from './PopularHero'

import CategoryOffer from "../category/CategoryOffer"
import { BASE_URL } from "../helper/baseurl"
import axios  from 'axios'

const PopularMain = ({data , slug}) => {

    console.log("Slug Is " , slug)
     const [couponData , setCouponData] = useState([])
    
      const fetchData = async () =>{
        
         try {
    
        const res = await axios.get(
          `${BASE_URL}/api/coupon/getCouponByBrandSlug/${slug}`
        );
    
        console.log("Use Effecy l")
        console.log("Responseis " , res.data)
        setCouponData(res.data.coupons)
    
        
      } catch (error) {
        console.log("error" , error)
        
      }
    
      }
    
      useEffect(()=>{
        fetchData()
      }, [])




      useEffect(() => {
    if (slug === "ajio") {
      // Create script tag for Meta Pixel
      const script = document.createElement("script");
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1265437760207968');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
 
      // Add noscript image fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1265437760207968&ev=PageView&noscript=1"
      />`;
      document.head.appendChild(noscript);
 
      console.log("✅ Meta Pixel inserted for AJIO page");
 
      // Cleanup when leaving page
      return () => {
        script.remove();
        noscript.remove();
      };
    }
  }, [slug]);

  
  return (
    <div>
       
        <PopularHero data={data} />
        <CategoryOffer couponData={couponData} />
       
      
    </div>
  )
}

export default PopularMain
