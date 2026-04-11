"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      background: "#131921",
      color: "white",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div style={{ fontWeight: "bold" }}>MyStore</div>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/">Home</Link>
        <Link href="/builder">Builder</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/vendor">Vendor</Link>
      </div>
    </div>
  );
}
