const navLinks = [
  { href: "/", text: "Home" },
  { href: "/news", text: "Aktuelles" },
  { href: "/hallenmeisterschaft", text: "Hallenmeisterschaft" },
  { href: "/contact", text: "Kontakt" },
  { href: "/about-us", text: "Über uns" },
  { href: "/about", text: "Termine" },
];

export const Navbar = () => {
  return (
    <header className="bg-black text-white shadow-xl">
      <nav>
        <ul className="list-none">
          {navLinks.map((link) => (
            <li key={link.href} className="inline-block p-4 hover:bg-slate-600">
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
