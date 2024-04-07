import Image from "next/image";
import bg from "../img/background.jpg";
import logo from "../img/fbc-logo.png";

export function HeroSection() {
  return (
    <section className="grid h-screen w-screen">
      <div className="relative" style={{ gridArea: "1 / 1 / 2 / 2" }}>
        <Image
          src={bg}
          alt="Trainingplatz des 1. FBC Griesheim e.V."
          className="object-cover"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <div className="relative z-10" style={{ gridArea: "1 / 1 / 2 / 2" }}>
        <div className="flex justify-center items-center h-full">
          <Image
            src={logo}
            alt="Vereinslogo des 1. FBC Griesheim e.V."
            className="col-span-1 row-span-1"
            priority
          />
        </div>
      </div>
    </section>
  );
}
