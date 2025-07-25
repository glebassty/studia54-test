"use client";

import Image from "next/image";
import React from "react";

type HeroSectionProps = {
  title?: string;
  description?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Заголовок по умолчанию",
  description = "Описание по умолчанию. Это описание отображается, если пропс не передан.",
}) => {
  return (
    <section className="w-full">
      <div className="relative hidden h-[500px] w-full md:block">
        <Image
          src="/images/hero-section/background.png"
          alt="Background"
          fill
          className="z-0 object-cover"
          priority
        />

        <div className="relative z-10 flex h-full w-full flex-row items-center justify-center bg-black/50 px-6 md:px-16">
          <div className="w-1/2 text-left text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>

          <div className="w-8" />

          <div className="w-1/2 text-left text-white">
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="relative h-[250px] w-full">
          <Image
            src="/images/hero-section/background_mobile.png"
            alt="Mobile Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="px-6 py-4">
          <p className="text-left text-sm text-white">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
