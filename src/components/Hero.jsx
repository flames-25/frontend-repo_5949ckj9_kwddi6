import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <Spline scene="https://prod.spline.design/8LrYb9Qoz2n8o9iu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
          <Star className="text-yellow-400" size={14} />
          Interactive Portfolio
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-gray-300">
          Crafting Digital Experiences in Gold & Silver
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          I design and build elegant, performant web applications with a premium aesthetic and delightful interactions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-gray-300 text-black px-5 py-3 font-semibold shadow-lg hover:shadow-yellow-400/20 transition-shadow"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold border border-white/10 text-gray-200 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),rgba(156,163,175,0.06),transparent_60%)]" />
    </section>
  );
}
