import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PromoBlockProps {
  description: string;
}

export default function PromoBlock({ description }: PromoBlockProps) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#f0f0f0]">
      {/* Фоновое изображение заголовка */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full">
        <Image
          src="/images/promo-block/title.png"
          alt="ARCHITECTURE"
          className="mx-[30px] mt-[40px] object-cover object-top"
          priority
          width={1300}
          height={170}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-7xl items-center justify-end px-8 py-24">
        {/* Картинка слева, под текстом (ниже по z-index) */}
        <div className="absolute -bottom-10 -left-20 z-0 w-1/2 max-w-xl">
          <Image
            src="/images/promo-block/model.png"
            alt="Model"
            width={1058}
            height={824}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Текстовый блок справа и выше по z-index */}
        <div className="z-10 flex w-full max-w-lg flex-col items-start justify-center text-left">
          <p className="mt-10 mb-8 text-lg text-neutral-700">{description}</p>
          <div className="flex w-full justify-start">
            <Button asChild variant="outline" className="px-8 py-4 text-lg">
              <Link href="/projects">All projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
