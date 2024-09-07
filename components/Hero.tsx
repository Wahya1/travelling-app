import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />

      {/*LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">An Exemple of Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam labore
          eum ab, velit quaerat molestiae dolores voluptatibus delectus iure qui
          temporibus vel ducimus reiciendis! Similique voluptas nesciunt non
          ducimus ratione.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  src={"star.svg"}
                  key={i}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            199k
            <span className="regular-16 lg:regular-20 ml-1 ">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex w-full gap-3 sm:flex-row">
          <Button type="button" title="Download app" variant="btn_green" />
          <Button
            type="button"
            title="How we work"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">123 Main St, NYC</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.55 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
