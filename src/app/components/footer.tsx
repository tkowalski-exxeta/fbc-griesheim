const footerLinks = [
  { href: "/impressum", text: "Impressum" },
  { href: "/datenschutz", text: "Datenschutz" },
];

// Datenschutzerklärung
// Impressum
// Hinweise zu Cookies

export const Footer = () => {
  return (
    <footer className="bg-black p-12 text-white">
      <nav>
        <ul className="list-none">
          {footerLinks.map((link) => (
            <li key={link.href} className="inline-block p-4 hover:bg-slate-600">
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p>© 2024 1. Feldbogen-Sport-Club Griesheim e.V.. All Rights Reserved.</p>
    </footer>
  );
};
