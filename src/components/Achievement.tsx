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
    <section id="profiles" className="py-32 bg-[#FBFBFD] overflow-hidden relative">
      {/* Background Orbs untuk efek Glassmorphism */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- Bagian 1: Company Profile (iOS Modern Style) --- */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">About Us</span>
            </div>

            {/* Kontainer Judul dengan Garis Indikator di Sebelah Kiri */}
            <div className="relative pl-8 mb-10">
              {/* Garis Indikator Biru - Sejajar dengan teks judul */}
              <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-blue-600 rounded-full" />

              <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Crafting Excellence <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Collaboratively
                </span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">
                OFFICE FO.ID adalah wadah kreativitas digital. Kami memadukan visi artistik dengan presisi teknis untuk membangun masa depan teknologi.
              </p>
            </div>

            {/* Statistik dengan Angka Berwarna */}
            <div className="flex gap-12 ml-8">
              <div className="relative">
                <span className="block text-4xl font-black text-blue-600">20+</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Experts</span>
              </div>
              <div className="relative">
                <span className="block text-4xl font-black text-cyan-500">10+</span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Showcase: Single Photo Collage (Asymmetric Shape + Decorations) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full flex justify-center items-center relative py-10"
          >
            {/* Dekorasi 1: Glow effect di belakang foto */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-10 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-40 z-0"
            />

            {/* Dekorasi 2: Floating Glassmorphism Badge */}
            <motion.div
              animate={{ y: [15, -5, 15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 px-5 py-4 bg-white/50 backdrop-blur-2xl border border-white/80 shadow-2xl z-20 rounded-[2rem] flex items-center gap-4 group cursor-default"
            >
              {/* Ikon Gradient 3D-look */}
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              {/* Teks Info */}
              <div className="pr-2">
                <p className="text-gray-900 font-black text-sm tracking-tight leading-none">Creativity</p>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-1.5">Built Stronger</p>
              </div>
            </motion.div>

            {/* Main Photo Collage - Asymmetric/Leaf Shape */}
            <div className="w-full max-w-[450px] aspect-[4/5] rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl border-[8px] border-white/90 bg-white/30 backdrop-blur-xl relative group z-10 transform transition-transform duration-500 hover:-translate-y-2">

              {/* Foto LANGSUNG dari Link Supabase Storage */}
              <img
                src="https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/DokumentasiFO/home2.JPG"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Company Profile"
              />

              {/* Overlay Gradient Elegan */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-black/10 to-transparent opacity-80" />

              {/* Floating Info Box di dalam foto */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="bg-white/80 backdrop-blur-md px-6 py-5 rounded-3xl border border-white shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-1">Our Culture</p>
                  <h4 className="text-gray-900 font-black text-xl leading-tight">Innovation Meets Creativity</h4>
                </div>
              </div>

              {/* Inner Light Reflection (Pantulan Cahaya) */}
              <div className="absolute inset-0 rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] pointer-events-none border-[2px] border-white/40 shadow-inner z-30" />
            </div>
          </motion.div>
        </div>

        {/* --- Bagian 2: Member Voices --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">Member Voices</h2>
          <div className="h-1 w-12 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Karena foto di atas sudah menggunakan URL langsung, kita bisa menggunakan slice(0,3) utuh untuk mengambil 3 testimoni teratas dari database */}
          {achievements.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl overflow-hidden mb-8 shadow-lg border-2 border-white">
                  <img src={item.image_url} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <p className="text-gray-600 text-lg font-medium italic mb-8 leading-relaxed">
                  "{item.description}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-black text-gray-900">{item.title}</h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Active Member</p>
                  </div>
                  <div className="p-3 bg-white/80 rounded-2xl shadow-sm border border-white/40">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C14.2262 14 16.017 15.7909 16.017 18V21H14.017ZM14.017 21H18.017V18C18.017 14.6863 15.3307 12 12.017 12H9.01703V10H12.017C16.4353 10 20.017 13.5817 20.017 18V21H14.017ZM10.017 3C10.5693 3 11.017 3.44772 11.017 4V6H13.017V4C13.017 2.34315 11.6739 1 10.017 1C8.36018 1 7.01703 2.34315 7.01703 4V6H9.01703V4C9.01703 3.44772 9.46474 3 10.017 3Z" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}