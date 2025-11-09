import { motion } from 'framer-motion';
import { Award, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const items = [
    { icon: <Code2 size={20} />, title: 'Clean Code', desc: 'Readable, scalable, and testable architecture.' },
    { icon: <Award size={20} />, title: 'Quality First', desc: 'Pixel-perfect UI and robust performance.' },
    { icon: <Sparkles size={20} />, title: 'Delightful UX', desc: 'Micro-interactions and motion that feel premium.' },
  ];

  return (
    <section id="about" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-gray-300">About Me</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              I’m a frontend-focused full-stack developer crafting modern web experiences. My work blends refined aesthetics with accessible, responsive interfaces for any device.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-200">
                  <div className="text-yellow-400">{it.icon}</div>
                  <div className="mt-2 font-medium">{it.title}</div>
                  <div className="text-sm text-gray-400">{it.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-400/20 via-yellow-300/10 to-gray-300/10 border border-white/10 p-1">
              <div className="h-full w-full rounded-2xl bg-black/60 backdrop-blur flex items-center justify-center text-center px-6">
                <p className="text-gray-300">
                  5+ years building experiences for startups and brands. Passionate about performance, design systems, and motion design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
