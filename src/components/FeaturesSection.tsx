"use client";

import Image from "next/image";
import React from "react";

type FeaturesSectionProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute right-0 bottom-0 left-0 z-10 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-10 left-10 z-20 max-w-[400px] text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
