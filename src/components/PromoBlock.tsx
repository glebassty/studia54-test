import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PromoBlockProps {
  description: string;
}

export default function PromoBlock({ description }: PromoBlockProps) {
  return (
    <section className="relative w-full bg-[#f0f0f0]">
      <div className="relative mx-auto hidden w-full max-w-7xl items-center justify-between px-8 py-24 md:flex">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/promo-block/title.png"
            alt="ARCHITECTURE"
            width={1300}
            height={170}
            priority
            className="h-auto w-full object-cover object-left"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>
        <div className="relative z-10 w-1/2">
          <Image
            src="/images/promo-block/model.png"
            alt="Model"
            width={1058}
            height={824}
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 1280px) 600px, 50vw"
          />
        </div>
        <div className="relative z-10 flex w-1/2 flex-col items-start justify-center pl-12">
          <p className="mb-8 max-w-md text-base leading-relaxed text-neutral-800">
            {description}
          </p>
          <Button asChild variant="outline" className="px-8 py-4 text-base">
            <Link href="/projects">All projects</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <Image
          src="/images/promo-block/title.png"
          alt="ARCHITECTURE"
          priority
          width={640}
          height={90}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
        <Image
          src="/images/promo-block/model.png"
          alt="Model"
          width={640}
          height={500}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
        <div className="space-y-8 bg-neutral-900 px-6 py-10 text-white">
          <p className="text-base leading-relaxed">{description}</p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full max-w-xs justify-center"
          >
            <Link href="/projects">All projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
