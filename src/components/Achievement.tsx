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

  const duplicatedAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <section id="achievements" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- Bagian 1: Company Profile --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h3 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Who We Are</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Innovation Through Collaboration</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              OFFICE FO.ID adalah komunitas teknologi yang berfokus pada pengembangan talenta digital.
              Kami membangun ekosistem di mana ide kreatif bertemu dengan keahlian teknis untuk solusi masa depan.
            </p>
            <div className="flex gap-8">
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white">
                <span className="block text-3xl font-bold text-blue-600">20+</span>
                <span className="text-sm text-gray-500 font-medium">Members</span>
              </div>
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white">
                <span className="block text-3xl font-bold text-cyan-500">10+</span>
                <span className="text-sm text-gray-500 font-medium">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80"
              className="rounded-3xl shadow-2xl border-8 border-white"
              alt="Team"
            />
          </motion.div>
        </div>

        {/* --- Bagian 2: Auto Scrolled Up Achievements --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Milestones</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Container Scroller dengan styling yang lebih clean sesuai gambar */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 shadow-inner">
          {/* Overlay Fading Top & Bottom */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent z-10" />

          <motion.div
            className="flex flex-col gap-5 p-8"
            animate={{
              y: [0, -1200], // Sesuaikan angka ini jika jumlah data sangat banyak
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {duplicatedAchievements.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative w-full flex items-center bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Profile Image (Sisi Kiri - Lingkaran sesuai gambar) */}
                <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-50 p-1 bg-white">
                    <img
                      src={item.image_url}
                      className="w-full h-full object-cover rounded-full"
                      alt={item.title}
                    />
                  </div>
                  {/* Badge Icon kecil di sudut foto (Opsional) */}
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                </div>

                {/* Content (Sisi Kanan - Sesuai Gambar) */}
                <div className="ml-6 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mt-1 md:mt-0">
                      verified achievement
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Active Member
                    </span>
                    <span className="text-gray-300">|</span>
                    <span>OFFICE FO.ID</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}