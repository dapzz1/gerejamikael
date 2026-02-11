import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import profilImg from "../assets/hero2.jpg";

const images = [hero1, hero2, hero3];

export default function Home() {
  const [active, setActive] = useState(0);
  const [showProfil, setShowProfil] = useState(false);

  // hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // animasi saat scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setShowProfil(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
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

      {/* PROFIL PAROKI */}
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
    </>
  );
}
