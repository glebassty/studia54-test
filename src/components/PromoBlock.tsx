import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PromoBlockProps {
  description: string;
}

export default function PromoBlock({ description }: PromoBlockProps) {
  return (
    <section className="relative bg-[#f0f0f0]">
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

      <div className="relative hidden items-center overflow-hidden md:flex md:flex-col">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/promo-block/title.png"
            alt="ARCHITECTURE"
            priority
            width={1300}
            height={170}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="absolute top-10 left-8 object-cover object-top"
          />
        </div>

        <div className="flex w-full max-w-7xl items-center justify-end px-8 py-24">
          <div className="absolute -bottom-10 -left-20 w-1/2 max-w-xl">
            <Image
              src="/images/promo-block/model.png"
              alt="Model"
              width={1058}
              height={824}
              sizes="(min-width: 1280px) 600px, 50vw"
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <div className="z-10 flex w-full max-w-lg flex-col items-start">
            <p className="mb-8 text-lg text-neutral-700">{description}</p>
            <Button asChild variant="outline" className="px-8 py-4 text-lg">
              <Link href="/projects">All projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
