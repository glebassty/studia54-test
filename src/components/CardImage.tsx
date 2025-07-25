"use client";

import Image from "next/image";
import React from "react";

type CardImageProps = {
  imageSrc?: string;
  description?: string;
  isShowDescription?: boolean;
};

const CardImage: React.FC<CardImageProps> = ({
  imageSrc = "/images/default_image.png",
  description = "Описание по умолчанию под картинкой.",
  isShowDescription = true,
}) => {
  return (
    <div className="hidden md:block">
      <div className="relative h-[400px] w-[600px]">
        <Image
          src={imageSrc}
          alt="Main image"
          width={1038}
          height={694}
          className="object-cover"
          priority
        />
      </div>
      {isShowDescription && (
        <div className="mt-4 w-[600px] text-left text-base text-white">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardImage;
