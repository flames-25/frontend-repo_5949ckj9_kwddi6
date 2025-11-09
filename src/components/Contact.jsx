import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800);
  };

  return (
    <section id="contact" className="bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-gray-300">Let’s work together</h2>
        <p className="mt-2 text-gray-300 max-w-2xl">Have a project in mind or just want to say hi? Drop a message and I’ll respond shortly.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          />
          <input
            type="email"
            required
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          />
          <textarea
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="sm:col-span-2 h-36 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          />
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-gray-300 text-black px-6 py-3 font-semibold shadow-lg hover:shadow-yellow-400/20 transition-shadow"
            >
              Send message <Send size={18} />
            </button>
            <span className="text-sm text-gray-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
