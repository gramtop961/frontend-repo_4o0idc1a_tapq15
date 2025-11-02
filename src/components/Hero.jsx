import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlay - doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,169,255,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-2xl px-4 py-2 text-xs md:text-sm text-white/80"
        >
          <span className="h-2 w-2 rounded-full bg-[#00A9FF] shadow-[0_0_14px_rgba(0,169,255,0.8)]" />
          Flames Blue · Immersive 3D Showcase
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          Haier: Smart Living Universe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-white/70"
        >
          A single scroll-driven film where the 3D product is the hero. Crafted with glassmorphism, cinematic motion, and Flames Blue lighting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 text-white hover:bg-white/15 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            Explore Products
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
          <a
            href="#technology"
            className="inline-flex items-center gap-3 rounded-2xl border border-[#00A9FF]/30 bg-[#00A9FF]/10 hover:bg-[#00A9FF]/20 backdrop-blur-xl px-5 py-3 text-[#BFEAFF] shadow-[0_10px_30px_rgba(0,169,255,0.25)]"
          >
            Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
}
