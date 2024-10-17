import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <div className=" flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max ">
            Little help if u need it
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis veritatis, cum earum consequuntur repellat sequi.
            Perferendis nostrum hic earum, quo quibusdam nulla nemo. Placeat
            labore obcaecati dolorum sit omnis.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  );
};

export default Guide;
