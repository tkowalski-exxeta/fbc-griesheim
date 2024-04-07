import Image from "next/image";
import conny from "../img/conni.jpg";
import ralf from "../img/ralf.jpg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export function Probetraining() {
  return (
    <section aria-label="Probetraining">
      <h1 className="text-2xl mt-12 mb-2">Probetraining</h1>
      <div className="flex flex-row gap-4">
        <section className="left flex-1">
          <h2>Haben wir dein Interesse geweckt?</h2>
          <p>
            Wenn ja, dann solltest du unbedingt einen Termin für ein
            Probetraining vereinbaren.
          </p>
          <ul className="my-4">
            <li>
              Anmeldungen bitte per E-Mail an unseren 2.Vorsitzenden Ralf
              Müller.
            </li>
            <li>
              Anmeldungen von Jugendlichen bitte über den Jugendwart (f) Conny
              Oldfield.
            </li>
          </ul>
          <p>
            nfach auf das Icon unterhalb des Namens klicken, oder das
            Kontaktformular ausfüllen.
          </p>
        </section>
        <section className="right flex-1">
          <div className="flex flex-row gap-4 w-min">
            <Portrait
              name="Ralf Müller"
              role="2.Vorsitzender"
              email="2.vorsitz@fbc-griesheim.de"
              img={ralf}
            />
            <Portrait
              name="Conny Oldfield"
              role="Jugendwart (f)"
              email="jugend@fbc-griesheim.de"
              img={conny}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

interface PortraitProps {
  name: string;
  role: string;
  email: string;
  img: StaticImport;
}
function Portrait({ name, role, email, img }: PortraitProps) {
  return (
    <div>
      <div style={{ height: 300, width: 240, position: "relative" }}>
        <Image
          src={img}
          fill
          alt={`${role} - ${name}`}
          className="object-cover"
        />
      </div>
      <div className="text-xl">{name}</div>
      <div className="text-slate-600 border-b-2 border-orange-700">{role}</div>
      <div>
        <a href={"mailto:" + email}>
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
