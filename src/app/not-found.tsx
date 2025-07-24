export default function NotFound() {
  return (
    <div className="bg-background text-muted-foreground fixed inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        404 – Страница не найдена
      </h1>
      <p className="mt-4 text-base sm:text-lg">Кажется, вы заблудились.</p>
    </div>
  );
}
