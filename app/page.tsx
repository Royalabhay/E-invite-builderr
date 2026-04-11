
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Amazon Builder ✅</h1>
      <p>Project is working correctly</p>

      <ul>
        <li><Link href="/admin">Admin</Link></li>
        <li><Link href="/vendor">Vendor</Link></li>
        <li><Link href="/builder">Builder</Link></li>
      </ul>
    </div>
  );
}
