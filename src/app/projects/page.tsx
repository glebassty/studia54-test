import CardImage from "~/components/CardImage";
import CardInfo from "~/components/Cardinfo";
import HeroSection from "~/components/HeroSection";

export default function ProjectsPage() {
  return (
    <div className="text-muted-foreground inset-0 flex min-h-screen flex-col items-center justify-center bg-[#181818] px-4 py-10">
      <HeroSection
        title="Пример заголовка"
        description="Это описание приходит как пропс и заменяет значение по умолчанию."
      />
      <div className="mt-10 flex w-full max-w-5xl flex-col gap-10">
        <div className="flex gap-6">
          <CardImage
            imageSrc="/images/card-image/image.png"
            description="Это описание появится под изображением"
            isShowDescription={false}
          />
          <CardInfo
            title="Это описание появится под изображением"
            description="Это описание появится под изображением"
            description2="Это описание2 появится под изображением"
          />
        </div>
        <div className="flex gap-6">
          <CardInfo
            imageSrc="/images/card-image/image_2.png"
            description="Это описание появится под изображением"
          />
          <CardImage
            imageSrc="/images/card-image/image_2.png"
            description="Это описание появится под изображением"
            isShowDescription={true}
          />
        </div>
      </div>
    </div>
  );
}
