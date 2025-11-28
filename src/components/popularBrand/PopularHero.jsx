"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import AjioButton from "./AjioButton";
import RunningBanner from "./RunningBanner";

gsap.registerPlugin(TextPlugin);

const PopularHero = ({ data, slug }) => {
  console.log("Banner data is ", data);
  const imageRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    console.log("GSAP Animation triggered");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(imageRef.current, {
        x: -150,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
      });

      tl.from(image1Ref.current, {
        y: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
      });
      tl.from(image2Ref.current, {
        y: -100,
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
      });

      //   gsap.to(imageRef.current, {
      //     y: 20,
      //     duration: 2,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: "sine.inOut",
      //   });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="  pt-[20px] md:pt-[50px] px-5 pb-[10px] overflow-hidden relative ">
      {/* 🔹 Background Video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 🔹 Optional dark overlay for contrast */}
      {/* <div className="absolute inset-0 bg-black/40 -z-5"></div> */}

      <RunningBanner />

      <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-[950]" ref={imageRef}>
          <div className="rounded-2xl overflow-hidden  ">

              <Link
              href="https://offer.mvmtracking.com/api/clicks?campaign_id=491&pub_id=15&originalClick={}"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className=" relative ">
              <Image
                src={data?.banner}
                alt={data?.title || "Category Banner"}
                width={800}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />

              {/* {slug === "ajio" && (
                <div
                  className="
            absolute 
            bottom-6 left-3 z-[1000] 
            sm:bottom-8 sm:left-20 
            md:bottom-10 md:left-27
            scale-60 sm:scale-90 md:scale-100
          "
                >
                  <AjioButton />
                </div>
              )} */}
            </div>
            </Link>
          </div>
        </div>

        <div className="abril-fatface-regular  lg:w-1/2 flex flex-col items-start justify-center gap-2 ">
          <div className=" overflow-hidden  " ref={image1Ref}>
            <Link
              href="https://offer.mvmtracking.com/api/clicks?campaign_id=487&pub_id=15&originalClick={}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={data?.image1}
                alt={data?.title || "Category Banner"}
                width={500}
                height={200}
                className="object-cover  h-auto rounded-2xl"
                priority
              />
            </Link>
          </div>
          <div className=" overflow-hidden " ref={image2Ref}>
            <Link
              href="https://offer.mvmtracking.com/api/clicks?campaign_id=489&pub_id=15&originalClick={}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={data?.image2}
                alt={data?.title || "Category Banner"}
                width={500}
                height={200}
                className="object-cover h-auto rounded-2xl"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
      {/* 
       <div className="absolute  top-0 right-2 w-[50px] md:w-[200px] h-[50px] md:h-[150px] bg-[url('/bg.gif')] bg-contain bg-center bg-no-repeat"></div>
         

         <div className="absolute  top-0 left-0 w-[50px] md:w-[130px] h-[50px] md:h-[150px] bg-[url('/bg.gif')] bg-contain bg-center bg-no-repeat"></div>
       */}
    </section>
  );
};

export default PopularHero;
