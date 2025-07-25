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
    <div className="w-full md:w-auto">
      {/* Картинка */}
      <div className="relative h-auto w-full md:h-[400px] md:w-[600px]">
        <Image
          src={imageSrc}
          alt="Main image"
          width={1038}
          height={694}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Описание */}
      {isShowDescription && (
        <div className="mt-4 text-left text-base text-white md:w-[600px] md:border-0">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardImage;
