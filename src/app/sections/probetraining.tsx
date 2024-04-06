import Image from "next/image";
import conny from "../img/conni.jpg";
import ralf from "../img/ralf.jpg";
import { relative } from "path";

export function Probetraining() {
  return (
    <section aria-label="Probetraining">
      <h1 className="text-2xl mt-12 mb-2">Probetraining</h1>
      <div className="flex flex-row gap-4">
        <section className="left flex-1">
          <h2>Haben wir dein Interesse geweckt?</h2>
          <p>
            Wenn ja, dann solltest du unbedingt einen Termin für ein
            Probetraining vereinbaren. Anmeldungen bitte per E-Mail an unseren
            2.Vorsitzenden Ralf Müller. Anmeldungen von Jugendlichen bitte über
            den Jugendwart (f) Conny Oldfield. Einfach auf das Icon unterhalb
            des Namens klicken, oder das Kontaktformular ausfüllen.
          </p>
        </section>
        <section className="right flex-1">
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <div style={{ height: 300, width: 240, position: "relative" }}>
                <Image
                  src={ralf}
                  fill
                  alt="2.Vorsitzender - Ralf Müller"
                  className="object-cover"
                />
              </div>
              <div>Ralf Müller</div>
              <div>2.Vorsitzender</div>
              <div>
                <a href="mailto:2.vorsitz@fbc-griesheim.de">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div style={{ height: 300, width: 240, position: "relative" }}>
                <Image
                  src={conny}
                  fill
                  alt="Jugendwart (f) - Conny Oldfield"
                  className="object-cover"
                />
              </div>
              <div>Conny Oldfield</div>
              <div>Jugendwart (f)</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
