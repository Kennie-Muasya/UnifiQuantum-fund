import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UniFiQuantumFund() {
  const [activePage, setActivePage] = useState('home');
  const features = [
    {
      title: 'Alpha Research Lab',
      description:
        'Institution-grade factor research environment with advanced signal engineering and robustness testing.',
    },
    {
      title: 'Quantum AI Engine',
      description:
        'AI-assisted alpha discovery, portfolio diagnostics, and systematic research acceleration.',
    },
    {
      title: 'Portfolio Intelligence',
      description:
        'Deep analytics for risk decomposition, drawdown analysis, exposure tracking, and optimization.',
    },
    {
      title: 'Global Market Coverage',
      description:
        'Research infrastructure for USA, EUR, ASI, JPN, GLB universes, crypto, and macro systems.',
    },
  ];

  const stats = [
    { label: 'Research Universes', value: '40+' },
    { label: 'AI Models', value: '120+' },
    { label: 'Alpha Simulations', value: '1M+' },
    { label: 'Institutional Workflows', value: '24/7' },
  ];

  const navigation = [
    'home',
    'research',
    'strategies',
    'technology',
    'analytics',
    'dashboard',
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'research':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black">Research Terminal</h2>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Active Alpha Clusters
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Monitor factor families, ensemble systems, and live research pipelines.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                  Signal Diagnostics
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Analyze Sharpe, turnover, drawdown, and production correlation metrics.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  AI Research Engine
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Generate systematic ideas using AI-enhanced quantitative workflows.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'strategies':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black">Strategy Systems</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-5">Momentum Systems</h3>
                <p className="text-gray-400 leading-relaxed">
                  Trend persistence and institutional accumulation frameworks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-400/20 rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-5">Quality & Value</h3>
                <p className="text-gray-400 leading-relaxed">
                  Fundamental alpha systems targeting long-horizon efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'technology':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black">Technology Infrastructure</h2>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 overflow-hidden">
              <div className="grid md:grid-cols-4 gap-6">
                {['Next.js', 'FastAPI', 'PostgreSQL', 'AI Engine'].map((tech) => (
                  <div
                    key={tech}
                    className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform"
                  >
                    <div className="text-xl font-bold text-cyan-300">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'analytics':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black">Portfolio Analytics</h2>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                ['Sharpe Ratio', '4.82'],
                ['Max Drawdown', '2.1%'],
                ['Turnover', '18%'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8"
                >
                  <div className="text-gray-400 mb-3">{label}</div>
                  <div className="text-5xl font-black text-cyan-400">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-black">Live Dashboard</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 h-[320px] flex items-center justify-center text-gray-500 text-xl">
                Performance Visualization Panel
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 h-[320px] flex items-center justify-center text-gray-500 text-xl">
                Live Quant Signals Monitor
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,120,255,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,200,0.08),transparent_35%)]" />

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              UniFi Quantum Fund
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Quantitative Intelligence Infrastructure
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            {navigation.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`capitalize transition-all duration-300 hover:text-white ${
                  activePage === item
                    ? 'text-cyan-400'
                    : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setActivePage('dashboard')}
            className="bg-white text-black px-5 py-2 rounded-2xl text-sm font-semibold hover:scale-105 transition-transform"
          >
            Launch Platform
          </button>
        </div>
      </header>

      {/* Hero Section */}
      {activePage === 'home' ? (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-4 py-2 text-sm text-cyan-300 mb-8">
                AI-Powered Quantitative Research Infrastructure
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
              >
                Engineering
                <span className="block text-cyan-400">Systematic Alpha</span>
              </motion.h2>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
                UniFi Quantum Fund delivers institutional-grade quantitative
                research, AI-assisted alpha discovery, and advanced portfolio
                intelligence across global financial markets.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => setActivePage('research')}
                  className="bg-cyan-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-2xl"
                >
                  Explore Alpha Lab
                </button>

                <button
                  onClick={() => setActivePage('analytics')}
                  className="border border-white/20 px-7 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
                >
                  View Research
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold">
                      Quantum Research Terminal
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Live Systematic Intelligence
                    </p>
                  </div>

                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-5">
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-400">Signal Sharpe</span>
                      <span className="font-semibold text-cyan-400">4.82</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="bg-cyan-400 h-2 rounded-full w-[82%]" />
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-5 border border-white/5">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-gray-400">Portfolio Fitness</span>
                      <span className="font-semibold text-emerald-400">3.67</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-400 h-2 rounded-full w-[74%]" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:scale-105 transition-transform"
                    >
                      <div className="text-2xl font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 min-h-[70vh]">
          {renderPage()}
        </section>
      )}

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
            Core Infrastructure
          </p>

          <h3 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Institutional-Grade Quantitative Technology Stack
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6 text-cyan-300 text-xl font-bold">
                Q
              </div>

              <h4 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                {feature.title}
              </h4>

              <p className="text-gray-400 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-[40px] p-12 text-center backdrop-blur-xl">
          <p className="uppercase tracking-[0.25em] text-sm text-cyan-300 mb-5">
            UniFi Quantum Fund
          </p>

          <h3 className="text-4xl md:text-6xl font-black leading-tight">
            Build The Next Generation
            <span className="block text-cyan-400">Quant Platform</span>
          </h3>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mt-8 leading-relaxed">
            Research, validate, optimize, and deploy systematic investment
            intelligence with AI-enhanced quantitative infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Start Research
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© 2026 UniFi Quantum Fund</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Research
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
