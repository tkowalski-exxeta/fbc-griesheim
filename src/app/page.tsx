import { Navbar } from "./components/navbar";
import { Probetraining } from "./sections/probetraining";
import { Trainingszeiten } from "./sections/trainingszeiten";
import { UnserVerein } from "./sections/unser-verein";
import { HeroSection } from "./sections/hero";
import { LocationSection } from "./sections/location";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="container mx-auto px-4">
        <UnserVerein />
        <LocationSection />
        <Trainingszeiten />
        <Probetraining />
      </div>
    </main>
  );
}
