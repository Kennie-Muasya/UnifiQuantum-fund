"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex px-4 py-2 rounded-full border">
            AI-Native Quantitative Investment Infrastructure
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-black mt-8"
          >
            The Future of
            <span className="block text-cyan-400">
              Quant Intelligence
            </span>
          </motion.h1>

          <p className="mt-8 text-xl text-gray-400">
            Institutional-grade quantitative research,
            AI-assisted alpha discovery,
            and portfolio analytics.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/research"
              className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold"
            >
              Explore Research
            </Link>

            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-xl border"
            >
              Live Dashboard
            </Link>
          </div>
        </div>

        <div>
          {/* Research Terminal Preview */}
        </div>
      </div>
    </section>
  );
}
