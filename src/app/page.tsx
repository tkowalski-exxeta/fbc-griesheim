import { Probetraining } from "./sections/probetraining";
import { Trainingszeiten } from "./sections/trainingszeiten";
import { UnserVerein } from "./sections/unser-verein";
import { HeroSection } from "./sections/hero";
import { LocationSection } from "./sections/location";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="container mx-auto py-8">
        <UnserVerein />
        <div className="flex flex-row my-16">
          <div className="flex-1">
            <Trainingszeiten />
          </div>
          <div className="flex-1">
            <LocationSection />
          </div>
        </div>
        <Probetraining />
      </div>
    </main>
  );
}
