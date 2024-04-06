import Image from "next/image";
import bg from "./img/background.jpg";
import conny from "./img/conni.jpg";
import logo from "./img/fbc-logo.jpg";
import ralf from "./img/ralf.jpg";

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#news", text: "Aktuelles" },
  { href: "#hallenmeisterschaft", text: "Hallenmeisterschaft" },
  { href: "#contact", text: "Kontakt" },
  { href: "#about-us", text: "Über uns" },
  { href: "#about", text: "Termine" },
];

const footerLinks = [
  { href: "#impressum", text: "Impressum" },
  { href: "#datenschutz", text: "Datenschutz" },
];

// Datenschutzerklärung
// Impressum
// Hinweise zu Cookies

export default function Home() {
  return (
    <div className="h-full w-full">
      <header className="bg-black text-white shadow-xl">
        <nav>
          <ul className="list-none">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="inline-block p-4 hover:bg-slate-600"
              >
                {link.text}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="relative w-screen h-screen justify-center items-center">
          <Image
            alt="Trainingplatz des 1. FBC Griesheim e.V."
            src={bg}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="h-full w-full flex justify-center items-center">
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={logo}
              alt="Next.js Logo"
              priority
            />
          </div>
        </div>

        <div style={{ width: 960, margin: "0 auto", padding: 42 }}>
          <h1 className="text-xl mt-12 mb-2">Unser Verein</h1>
          <p>
            Gegründet wurde der 1. Feldbogen-Sport-Club Griesheim e.V. im Jahre
            1985. Seine sportliche Heimat fand der Verein mit dem Abschluß eines
            Pachtvertrages mit der Stadt Griesheim, auf einem Gelände
            nordwestlich der Wilhelm-Leuschner-Straße.
            <br />
            Auf unserem Vereinsgelände können alle gängigen Wettkampfdistanzen
            geschossen werden. Der 1. Feldbogen-Sport-Club Griesheim e.V. hat
            momentan 153 Mitglieder aus mehreren Nationen. Knapp 1/4 unserer
            Mitglieder sind Jugendliche unter 18 Jahren. Organisiert ist der
            Verein im Dachverband des DFBV ( Deutscher Feldbogen Verband )
            Einige Mitglieder nehmen regelmäßig an nationalen und
            internationalen Wettkämpfen teil.
          </p>

          <h1 className="text-xl mt-12 mb-2">So findet ihr uns</h1>
          <p>Adresse: Wilhelm-Leuschner-Straße 292 64344 Griesheim</p>

          <h1 className="text-xl mt-12 mb-2">Trainingszeiten</h1>
          <p>
            <table>
              <tr>
                <th colSpan={3} className="pt-8">
                  Jugendliche
                </th>
              </tr>

              <tr>
                <td width="200">Sommer</td>
                <td width="200">Mittwoch</td>
                <td width="200">17:00 - 18.00 Uhr</td>
              </tr>

              <tr>
                <td>Winter</td>
                <td>Sonntag</td>
                <td>16:30 - 18:00 Uhr</td>
              </tr>

              <tr>
                <th colSpan={3} className="pt-8">
                  Erwachsene
                </th>
              </tr>

              <tr>
                <td>Sommer</td>
                <td>Mittwoch</td>
                <td>18:00 - 20:00 Uhr</td>
              </tr>

              <tr>
                <td>Winter</td>
                <td>Samstag / Sonntag</td>
                <td>18:00 - 20:00 Uhr</td>
              </tr>
            </table>
          </p>

          <h1 className="text-xl mt-12 mb-2">Probetraining</h1>
          <h2>Haben wir dein Interesse geweckt?</h2>
          <p>
            Wenn ja, dann solltest du unbedingt einen Termin für ein
            Probetraining vereinbaren. Anmeldungen bitte per E-Mail an unseren
            2.Vorsitzenden Ralf Müller. Anmeldungen von Jugendlichen bitte über
            den Jugendwart (f) Conny Oldfield. Einfach auf das Icon unterhalb
            des Namens klicken, oder das Kontaktformular ausfüllen.
          </p>

          <div className="flex flex-row">
            <div className="flex-1">
              <Image
                src={ralf}
                width={160}
                alt="2.Vorsitzender - Ralf Müller"
                priority
              />
              <div>Ralf Müller</div>
              <div>2.Vorsitzender</div>
            </div>
            <div className="flex-1">
              <Image
                src={conny}
                width={160}
                alt="Jugendwart (f) - Conny Oldfield"
                priority
              />
              <div>Conny Oldfield</div>
              <div>Jugendwart (f)</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black p-12 text-white">
        <nav>
          <ul className="list-none">
            {footerLinks.map((link) => (
              <li
                key={link.href}
                className="inline-block p-4 hover:bg-slate-600"
              >
                {link.text}
              </li>
            ))}
          </ul>
        </nav>

        <p>
          © 2024 1. Feldbogen-Sport-Club Griesheim e.V.. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
