import Image from "next/image";

type CardInfoProps = {
  imageSrc?: string;
  title?: string;
  description: string;
  description2?: string;
};

export default function CardInfo({
  imageSrc,
  title,
  description,
  description2,
}: CardInfoProps) {
  return (
    <div className="border-b border-[#5B5C5D] text-left text-white md:border-b">
      {imageSrc && (
        <div className="relative h-auto w-full">
          <Image
            src={imageSrc}
            alt={title ?? "image"}
            width={640}
            height={481}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div className="p-5 md:p-5">
        {title && <h2 className="pt-5 text-xl font-bold">{title}</h2>}
        <p className="pt-5">{description}</p>
        {description2 && <p className="pt-5">{description2}</p>}
      </div>
    </div>
  );
}
