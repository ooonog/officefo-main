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

  // Menduplikasi data agar scroll terlihat tidak terputus (infinite)
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

        {/* Container Scroller */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-slate-200/50 border border-white shadow-inner">
          {/* Overlay Gradient (Top & Bottom) agar efek kartu muncul/hilang halus */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10" />

          <motion.div
            className="flex flex-col gap-6 p-6"
            animate={{
              y: [0, -1000], // Menyesuaikan dengan total tinggi konten
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: 'paused' }} // Berhenti saat di-hover
          >
            {duplicatedAchievements.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative w-full h-40 flex items-center bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:bg-white/60 transition-all duration-300"
              >
                {/* Image Thumbnail */}
                <div className="w-40 h-full overflow-hidden">
                  <img
                    src={item.image_url}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={item.title}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2 italic">
                    "{item.description}"
                  </p>
                </div>

                {/* Glassy Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Achievement</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}