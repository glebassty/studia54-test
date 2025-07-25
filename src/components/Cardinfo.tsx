import Image from "next/image";

type CardInfoProps = {
  imageSrc?: string; // путь к картинке (если нет — не показываем)
  title?: string; // заголовок (если нет — не показываем)
  description: string; // первый блок текста
  description2?: string; // второй блок текста (если нет — не показываем)
};

export default function CardInfo({
  imageSrc,
  title,
  description,
  description2,
}: CardInfoProps) {
  return (
    <div className="border-b border-[#5B5C5D] text-left text-white">
      {/* Картинка */}
      {imageSrc && (
        <div className="relative h-[300px] w-[400px]">
          <Image
            src={imageSrc}
            alt={title ?? "image"}
            width={640}
            height={481}
            className="object-cover"
          />
        </div>
      )}

      {title && <h2 className="pt-5 text-xl font-bold">{title}</h2>}

      <p className="pt-5">{description}</p>

      {description2 && <p className="pt-5">{description2}</p>}
    </div>
  );
}
