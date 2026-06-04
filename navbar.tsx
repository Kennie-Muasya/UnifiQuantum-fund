import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-black text-2xl">
            UniFi Quantum Fund
          </h1>
        </Link>

        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/strategies">Strategies</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
