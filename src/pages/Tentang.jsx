export default function Tentang() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tentang Stasi</h1>

      <p style={styles.text}>
        Stasi Santo Mikael Mojosari merupakan bagian dari Gereja Katolik yang
        melayani umat di wilayah Mojosari dan sekitarnya. Stasi ini menjadi tempat
        umat berkumpul untuk berdoa, merayakan Ekaristi, serta mempererat
        kebersamaan dalam iman.
      </p>

      <p style={styles.text}>
        Dengan semangat pelayanan dan kebersamaan, Stasi Santo Mikael Mojosari
        terus berupaya menjadi sarana pertumbuhan iman dan kasih bagi seluruh
        umat.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    color: "#2e7d32",
    marginBottom: "1rem",
  },
  text: {
    lineHeight: "1.7",
    marginBottom: "1rem",
  },
};
