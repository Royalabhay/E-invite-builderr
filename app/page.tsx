import Navbar from "./components/Navbar";
import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data } = await supabase.from("products").select("*");

  return (
    <div style={{ background: "#f3f3f3", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div style={{
        background: "linear-gradient(to right, #232f3e, #37475a)",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h1>Welcome to MyStore</h1>
        <p>Best products at best price</p>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Top Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {data?.map((p: any) => (
            <div key={p.id} style={{
              background: "white",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
              <div style={{
                height: "150px",
                background: "#eee",
                marginBottom: "10px"
              }} />

              <h3>{p.title}</h3>
              <p style={{ fontWeight: "bold" }}>₹{p.price}</p>

              <button style={{
                background: "#ffd814",
                border: "none",
                padding: "8px",
                width: "100%",
                marginTop: "10px",
                cursor: "pointer"
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
