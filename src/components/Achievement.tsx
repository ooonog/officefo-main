// src/components/Achievements.tsx
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
    <section id="achievements" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Bagian 1: Company Profile Singkat --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2">
            <h3 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Who We Are</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Innovation Through Collaboration</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              OFFICE FO.ID adalah komunitas teknologi yang berfokus pada pengembangan talenta digital. 
              Kami membangun ekosistem di mana ide kreatif bertemu dengan keahlian teknis untuk solusi masa depan.
            </p>
            <div className="flex gap-8">
              <div><span className="block text-3xl font-bold">100+</span><span className="text-sm text-gray-500">Members</span></div>
              <div><span className="block text-3xl font-bold">50+</span><span className="text-sm text-gray-500">Projects</span></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80" className="rounded-2xl shadow-2xl" alt="Team" />
          </div>
        </div>

        {/* --- Bagian 2: Achievement Member (Grid Gambar) --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Milestones</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img src={item.image_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-white/0 group-hover:text-white/80 mt-2 text-sm transition-all">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}