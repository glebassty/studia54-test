import HeroSection from "~/components/HeroSection";

export default function ProjectsPage() {
  return (
    <div className="text-muted-foreground inset-0 flex min-h-screen flex-col items-center justify-center bg-[#f0f0f0] px-4 text-center">
      <HeroSection
        title="Пример заголовка"
        description="Это описание приходит как пропс и заменяет значение по умолчанию."
      />
    </div>
  );
}
