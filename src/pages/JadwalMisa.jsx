import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function JadwalMisa() {
  const [jadwal, setJadwal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("jadwal_misa")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (!error) {
        setJadwal(data || []);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <section className="jadwal">
      <h1 className="jadwal-title">Jadwal Misa</h1>
      <p className="jadwal-subtitle">Stasi St. Mikael Mojosari</p>

      {loading ? (
        <p>Memuat jadwal misa...</p>
      ) : (
        <div className="jadwal-card">
          <div className="jadwal-row header">
            <span>Hari</span>
            <span>Waktu</span>
            <span>Keterangan</span>
          </div>

          {jadwal.length === 0 ? (
            <div className="jadwal-row">
              <span>Belum ada jadwal</span>
              <span></span>
              <span></span>
            </div>
          ) : (
            jadwal.map((item) => (
              <div className="jadwal-row" key={item.id}>
                <span>{item.hari}</span>
                <span>{item.waktu}</span>
                <span>{item.keterangan}</span>
              </div>
            ))
          )}
        </div>
      )}

      <p className="jadwal-note">
        Untuk hari raya besar Gereja, jadwal misa akan diumumkan kembali.
      </p>
    </section>
  );
}
