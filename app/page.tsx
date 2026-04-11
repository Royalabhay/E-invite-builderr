"use client";

import Navbar from "./components/Navbar";

export default function Home() {
  const products = [
    { id: 1, title: "Demo Product 1", price: 499 },
    { id: 2, title: "Demo Product 2", price: 999 }
  ];

  return (
    <div style={{ background: "#f3f3f3", minHeight: "100vh" }}>
      
      <Navbar />

      <div style={{
        background: "linear-gradient(to right, #232f3e, #37475a)",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h1>Welcome to MyStore</h1>
        <p>Working Website ✅</p>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Products</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {products.map((p) => (
            <div key={p.id} style={{
              background: "white",
              padding: "15px",
              borderRadius: "8px"
            }}>
              <h3>{p.title}</h3>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
