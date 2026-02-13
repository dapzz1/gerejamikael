import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import profilImg from "../assets/hero2.jpg";

const images = [hero1, hero2, hero3];

export default function Home() {
  const [active, setActive] = useState(0);
  const [showProfil, setShowProfil] = useState(false);

  // HERO AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // ANIMASI PROFIL SAAT SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowProfil(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-bg ${i === active ? "show" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay">
          <h1>Stasi St. Mikael Mojosari</h1>
          <p>Website Resmi Stasi St. Mikael Mojosari</p>
        </div>

        <div className="hero-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= PROFIL PAROKI ================= */}
      <section className={`profil ${showProfil ? "show" : ""}`}>
        <div className="profil-content">
          <small>Sekilas Tentang Kami</small>
          <h2>Profil Paroki</h2>
          <p>
            Stasi St. Mikael Mojosari merupakan bagian dari Paroki Santa Monika
            Krian. Berawal dari kebersamaan umat dalam pendalaman iman dan
            perayaan Ekaristi, stasi ini terus bertumbuh menjadi komunitas umat
            yang hidup dalam semangat pelayanan, persaudaraan, dan perutusan
            Gereja Katolik.
          </p>
        </div>

        <div className="profil-image">
          <img src={profilImg} alt="Gereja St. Mikael Mojosari" />
        </div>
      </section>

      {/* ================= LOKASI MAP ================= */}
      <section className="lokasi">
        <h2 className="lokasi-title">Lokasi Gereja</h2>

        <div className="map-container">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5170045990008!2d112.54101597934681!3d-7.518446173141704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780beba8fcf05b%3A0x42a574d788b8109e!2sGereja%20Katolik%20Stasi%20Santo%20Mikael%2C%20Mojosari%20(Paroki%20Santa%20Monika%2C%20Krian)!5e0!3m2!1sid!2sid!4v1770967822779!5m2!1sid!2sid"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Lokasi Gereja"
></iframe>

        </div>
      </section>
    </>
  );
}
