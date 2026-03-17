import { useEffect, useState } from 'react';
import { ExternalLink, Code2, Globe, Rocket } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';
import { motion } from 'framer-motion';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true });

    if (!error && data) {
      setProjects(data);
    }
  };

  // Fungsi untuk menentukan ukuran grid secara acak/berpola agar terlihat seperti Bento Grid
  const getGridSpan = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2'; // Kartu Utama Besar
    if (index === 3) return 'md:col-span-2'; // Kartu Horizontal
    return '';
  };

  return (
    <section id="projects" className="pb-32 bg-[#FBFBFD] overflow-hidden relative">
      {/* Background Orbs untuk efek Glassmorphism */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Tag/Pill Style disamakan dengan section lain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm"
            >
              <span className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                <Rocket size={14} />
                Innovations
              </span>
            </motion.div>

            {/* Tipografi disamakan (font-black, tracking-tight) */}
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Community Projects
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Kumpulan solusi kreatif dan proyek berdampak tinggi yang dibangun oleh kolaborasi anggota komunitas kami.
            </p>
          </div>

          {/* Ikon Dekoratif Glassmorphism */}
          <div className="hidden md:flex gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <Code2 className="text-blue-600" size={24} />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
              <Globe className="text-cyan-500" size={24} />
            </div>
          </div>
        </div>

        {/* Bento Grid Layout - Ultra Glassy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/80 bg-white/30 backdrop-blur-xl transition-all duration-500 hover:shadow-blue-900/20 ${getGridSpan(index)}`}
            >
              {/* Image Background */}
              <img
                src={project.image_url}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient Elegan */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Inner Light Reflection (Pantulan Cahaya) */}
              <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none border-[2px] border-white/40 shadow-inner z-20" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-black text-white mb-3 tracking-tight`}>
                    {project.title}
                  </h3>
                  <p className={`text-gray-200 font-medium leading-relaxed mb-6 line-clamp-2 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                    {project.description}
                  </p>

                  <button
                    onClick={() => {
                      if (project.details_url && project.details_url !== '#') {
                        window.open(project.details_url, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-2 text-white font-bold py-2.5 px-5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-sm hover:bg-white hover:text-blue-600 transition-all text-xs uppercase tracking-widest"
                  >
                    <span>Explore Project</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Decorative Tag for Large Card */}
              {index === 0 && (
                <div className="absolute top-8 left-8 px-4 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg border border-blue-400/50 z-20">
                  Featured Project
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}