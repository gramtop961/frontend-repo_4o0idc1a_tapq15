import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <footer id="technology" className="relative py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(0,169,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white">Built for a Glass-First Web</h3>
          <p className="mt-3 text-white/70 max-w-2xl">
            UI panels use glassmorphism with high blur and gentle tints; 3D scenes render in real time. Scroll is your timeline controller — the film unfolds as you move.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-5 py-3 text-white transition-colors"
            >
              Back to Top
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-2xl border border-[#00A9FF]/30 bg-[#00A9FF]/10 hover:bg-[#00A9FF]/20 backdrop-blur-xl px-5 py-3 text-[#BFEAFF] transition-colors"
            >
              Explore Products
            </a>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-white/50 text-xs">© {new Date().getFullYear()} Haier · Flames Blue</p>
      </div>
    </footer>
  );
}
