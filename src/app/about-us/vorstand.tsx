import { Portrait } from "../components/portrait";
import frank from "../img/people/frank_konhaeuser.jpg";
import conny from "../img/people/connie_oldfield.jpg";
import ralf from "../img/people/ralf_mueller.jpg";
import corina from "../img/people/corina_thierau.jpg";
import sven from "../img/people/sven_erik_haaks.jpg";
import gary from "../img/people/gary_oldfield.jpg";

export function Vorstand() {
  return (
    <section>
      <h1 className="text-2xl mt-12 mb-2">Vorstand</h1>
      <div className="flex flex-row gap-4">
        <Portrait
          role="1. Vorsitzender"
          name="Frank Konhäuser"
          email="1.vorsitz@fbc-griesheim.de"
          img={frank}
        />
        <Portrait
          name="Ralf Müller"
          role="2.Vorsitzender"
          email="2.vorsitz@fbc-griesheim.de"
          img={ralf}
        />
        <Portrait
          name="Corina Thierau"
          role="Kassenwart (f)"
          email="kasse@fbc-griesheim.de"
          img={corina}
        />
        <Portrait
          name="Sven-Eric Haaks"
          role="Schriftwart"
          email="schrift@fbc-griesheim.de"
          img={sven}
        />
        <Portrait
          name="Conny Oldfield"
          role="Jugendwart (f)"
          email="jugend@fbc-griesheim.de"
          img={conny}
        />
        <Portrait
          name="Gary Oldfield"
          role="Platzwart"
          email="platz@fbc-griesheim.de"
          img={gary}
        />
      </div>
    </section>
  );
}
