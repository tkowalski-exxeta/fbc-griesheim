import Image from "next/image";
import a from "./freestyle-junioren-maennlich.jpg";
import b from "./freestyle-senioren-maennlich.jpg";
import c from "./barebow-recurve-erwachsene-weiblich.jpg";
import d from "./barebow-compound-junge-senioren-maennlich.jpg";
import e from "./barebow-compound-junge-senioren-weiblich.jpg";
import f from "./mannschaft-barebow.jpg";
import g from "./barebow-compound-junge-senioren-weiblich-2.jpg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

const data: { category: string; place: React.ReactNode; img: StaticImport }[] =
  [
    {
      category: "Freestyle Limited Recurve - Junioren - männlich",
      place: "1. Platz : Silas Naumann",
      img: a,
    },
    {
      category: "Freestyle Limited Recurve - Senioren - männlich",
      place: "3. Platz: Siegfried Meissner",
      img: b,
    },
    {
      category: "Barebow Recurve - Erwachsene - weiblich",
      place: "1. Platz: Anja Miller",
      img: c,
    },
    {
      category: "Barebow Compound - Junge Senioren - männlich",
      place: "1. Platz: Ulf Trabert",
      img: d,
    },
    {
      category: "Barebow Compound - Junge Senioren - weiblich",
      place: "1. Platz: Cornelia Oldfield",
      img: e,
    },
    {
      category:
        "In der Mannschaftswertung erzielte unser Verein in der Kategorie „Barebow Recurve“ den ersten Platz. Die gemeldeten Starterinnen und Starter waren:",
      place: (
        <ul className="list-disc list-inside">
          <li>Anja Miller</li>
          <li>Gary Oldfield</li>
          <li>Sven-Eric Haaks</li>
        </ul>
      ),
      img: f,
    },
    {
      category: "Barebow Compound - Junge Senioren - weiblich",
      place: "1. Platz: Cornelia Oldfield",
      img: g,
    },
  ];

export default function Halle2024() {
  return (
    <main className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        1. FBC-Griesheim erfolgreich bei der DFBV Meisterschaft Halle 2024
      </h1>
      <p>
        Vom 2. bis 3. März 2024 richtete der DFBV zusammen mit der
        Schützengemeinschaft Bad Dürrheim e. V. die deutsche Meisterschaft Halle
        2024 in Bad Dürrheim aus.
      </p>
      <p>
        Neben zahlreichen Startern anderer Vereine war der 1.
        Feldbogen-Sport-Club Griesheim gut vertreten und vor allem erfolgreich.
        Unsere Schützinnen und Schützen konnten sich die folgenden Platzierungen
        sichern:
      </p>

      <div
        className="w-[1120px] grid gap-4 mx-auto my-8"
        style={{ gridTemplateColumns: "420px 640px" }}
      >
        {data.map(({ category, place, img }, i) => (
          <section className="contents" key={i}>
            <div className="row-span-1 col-span-1">
              <div className="text-slate-600">{category}</div>
              <div className="text-xl">{place}</div>
            </div>
            <div className="row-span-1 col-span-1">
              <Image src={img} alt={category} width={640} height={480} />
            </div>
          </section>
        ))}
      </div>

      <p className="text-center text-xl">
        Wir danken allen Teilnehmerinnen und Teilnehmern für ihre Leistungen
        <br /> und freuen uns auf zukünftige Erfolge.
      </p>
    </main>
  );
}
