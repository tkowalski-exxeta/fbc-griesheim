import { HeroSection } from "../sections/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="container mx-auto py-8">
        <h1 className="text-3xl">Aktuelles</h1>
      </div>
    </main>
  );
}
