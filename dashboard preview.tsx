import Link from "next/link";

export default function DashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="rounded-3xl border p-10">
        <h2 className="text-5xl font-black">
          Live Dashboard
        </h2>

        <p className="mt-4 text-gray-400">
          Monitor portfolios, alpha clusters,
          risk exposure and market intelligence.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-8 px-6 py-3 bg-cyan-400 text-black rounded-xl"
        >
          Open Dashboard
        </Link>
      </div>
    </section>
  );
}
