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

export const Navbar = () => {
  return (
    <header className="bg-black text-white shadow-xl">
      <nav>
        <ul className="list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="inline-block p-4 hover:bg-slate-600">
              {link.text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
