import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PromoBlockProps {
  description: string;
}

export default function PromoBlock({ description }: PromoBlockProps) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#f0f0f0] py-16">
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
      <div className="relative z-10 flex w-full max-w-7xl items-center justify-between px-8 py-24">
        <div className="-mt-[85px] w-1/2 max-w-xl flex-shrink-0">
          <Image
            src="/images/promo-block/model.png"
            alt="Model"
            width={1058}
            height={825}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
        <div className="ml-12 flex w-1/2 max-w-lg flex-col items-start justify-center">
          <p className="mt-10 mb-8 text-lg text-neutral-700">{description}</p>
          <Link href="/projects">
            <Button variant="outline" className="px-8 py-4 text-lg">
              All projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
