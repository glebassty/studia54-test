"use client";

import Image from "next/image";
import React from "react";

type FeaturesSectionProps = {
  title?: string;
  description?: string;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = "Заголовок по умолчанию",
  description = "Описание по умолчанию. Это описание отображается, если пропс не передан.",
}) => {
  return (
    <section className="w-full">
      <div className="relative hidden h-[500px] w-full md:block">
        <Image
          src="/images/feat-section/desktop.png"
          alt="Background"
          width={1800}
          height={1200}
          className="z-0 object-cover"
          priority
        />

        <div className="absolute bottom-10 left-10 z-10 text-left text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-[10px] text-lg">{description}</p>
        </div>

        <div className="absolute inset-0 z-[1] bg-black/50" />
      </div>

      <div className="block md:hidden">
        <div className="relative h-[250px] w-full">
          <Image
            src="/images/feat-section/mobile.png"
            alt="Mobile Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="px-6 py-4 text-left text-gray-800">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
