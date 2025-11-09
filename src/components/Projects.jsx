import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Luxury E‑Commerce',
    description: 'High-end storefront with immersive visuals and smooth checkout.',
    tags: ['React', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'Dynamic portfolio manager with themeable sections and analytics.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: '3D Showcase',
    description: 'Interactive 3D product viewer powered by Spline and Three.js.',
    tags: ['Spline', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1400&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-gray-300">Selected Projects</h2>
          <p className="text-sm text-gray-400">A curated selection of recent work</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} className="inline-flex items-center gap-1 text-sm text-gray-200 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-gray-200 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
