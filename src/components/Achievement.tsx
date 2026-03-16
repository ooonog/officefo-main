// src/components/Achievement.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Achievement } from '../types';
import { motion } from 'framer-motion';

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('display_order', { ascending: true });
      if (!error && data) setAchievements(data);
    };
    fetchAchievements();
  }, []);

  return (
    <section id="profiles" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- Bagian 1: Company Profile Singkat --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 overflow-hidden">
          {/* Animasi Sisi Teks (Slide dari Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h3 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">
              Who We Are?
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Innovation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Through Collaboration
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              OFFICE FO.ID adalah komunitas teknologi yang berfokus pada pengembangan talenta digital.
              Kami membangun ekosistem di mana ide kreatif bertemu dengan keahlian teknis untuk menciptakan
              solusi masa depan yang berdampak luas bagi industri global.
            </p>

            {/* Animasi Statistik (Muncul Bertahap) */}
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="block text-3xl font-bold text-gray-900">100+</span>
                <span className="text-sm text-gray-500">Active Members</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="block text-3xl font-bold text-gray-900">50+</span>
                <span className="text-sm text-gray-500">Projects Done</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Animasi Sisi Gambar (Slide dari Kanan + Efek Zoom) */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dekorasi Aksen Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
            </div>

            {/* Elemen Dekoratif Melayang */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/10 backdrop-blur-xl rounded-full -z-10"
            />
          </motion.div>
        </div>

        {/* --- Bagian 2: Member Voices (Full Image Grid) --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What They Say?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Inspirasi dan pesan dari para talenta digital di komunitas kami.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {achievements.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Gambar Full Background */}
              <img
                src={item.image_url}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
              />

              {/* Overlay Gradient agar teks terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Konten Teks di Atas Gambar */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                {/* Ikon Kutipan Dekoratif */}
                <div className="mb-4 opacity-50">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C14.2262 14 16.017 15.7909 16.017 18V21H14.017ZM14.017 21H18.017V18C18.017 14.6863 15.3307 12 12.017 12H9.01703V10H12.017C16.4353 10 20.017 13.5817 20.017 18V21H14.017ZM10.017 3C10.5693 3 11.017 3.44772 11.017 4V6H13.017V4C13.017 2.34315 11.6739 1 10.017 1C8.36018 1 7.01703 2.34315 7.01703 4V6H9.01703V4C9.01703 3.44772 9.46474 3 10.017 3Z" />
                  </svg>
                </div>

                {/* Pesan Kutipan */}
                <p className="text-white text-lg font-medium italic leading-relaxed mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  "{item.description}"
                </p>

                {/* Identitas Member */}
                <div className="border-t border-white/20 pt-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                    Community Member
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}