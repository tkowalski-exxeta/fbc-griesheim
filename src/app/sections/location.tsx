export function LocationSection() {
  return (
    <section>
      <h1 className="text-2xl">So findet ihr uns</h1>
      <p>Adresse: Wilhelm-Leuschner-Straße 292 64344 Griesheim</p>
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1081.300938656048!2d8.59547314735583!3d49.865348199967706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd70aa6482d409%3A0xf5fc296dd1057327!2s1.%20Feldbogen-Sport-Club%20Griesheim%20e.V.!5e0!3m2!1sen!2sde!4v1712447844614!5m2!1sen!2sde"
      ></iframe>
    </section>
  );
}
