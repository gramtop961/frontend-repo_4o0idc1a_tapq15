import { motion } from 'framer-motion';
import { Refrigerator, Tv, Wind, WashingMachine } from 'lucide-react';

// Lucide does not have Refrigerator/WashingMachine named icons in all versions.
// We'll fall back to common icons ensuring build safety.
import { Monitor, Wind as WindIcon, Grid } from 'lucide-react';

const products = [
  {
    key: 'fridge',
    title: 'French Door Refrigerator',
    subtitle: 'HRF-619SS · Stainless steel with realistic anisotropy',
    icon: Grid, // Stand-in for appliance grid aesthetic
    highlight: 'Cinematic 1:1 digital twin with 4K PBR textures',
  },
  {
    key: 'tv',
    title: 'Smart QLED TV',
    subtitle: 'S9 Series · Ultra-thin bezel & calibrated glare',
    icon: Monitor,
    highlight: 'True-to-life screen reflections and shader-driven bloom',
  },
  {
    key: 'ac',
    title: 'UV-Clean Air Conditioner',
    subtitle: 'HSU-18K-PYFC · Quiet airflow & subtle LED display',
    icon: WindIcon,
    highlight: 'Volumetric airflow lines and particle-driven UV cues',
  },
  {
    key: 'washer',
    title: 'Front Load Washing Machine',
    subtitle: 'HW100-B14979 · Glass door with accurate IOR',
    icon: Grid, // Stand-in
    highlight: 'Physically correct refractions and drum micro-detail',
  },
];

export default function ScenePanel() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0A0F1A]/40 to-[#0A0F1A]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Precision-built Digital Twins
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Each model is authored in Blender Cycles with 4K PBR materials, exported to glTF/GLB with Draco for seamless WebGL delivery.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#00A9FF]/20 blur-3xl" />
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 rounded-2xl bg-[#00A9FF]/15 ring-1 ring-[#00A9FF]/40 flex items-center justify-center text-[#BFEAFF]">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">{p.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{p.subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm md:text-base">{p.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
