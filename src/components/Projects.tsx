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
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-4"
            >
              <Rocket size={16} />
              <span>Innovations</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Community Projects
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kumpulan solusi kreatif dan proyek berdampak tinggi yang dibangun oleh kolaborasi anggota komunitas kami.
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
              <Code2 className="text-blue-500" />
            </div>
            <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100">
              <Globe className="text-cyan-500" />
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 ${getGridSpan(index)}`}
            >
              {/* Image Background */}
              <img
                src={project.image_url}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient (Always Visible but deepens on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className={`${index === 0 ? 'text-3xl' : 'text-xl'} font-bold text-white mb-2`}>
                    {project.title}
                  </h3>
                  <p className={`text-gray-200 leading-relaxed mb-4 line-clamp-2 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                    {project.description}
                  </p>

                  <button
                    onClick={() => {
                      if (project.details_url && project.details_url !== '#') {
                        window.open(project.details_url, '_blank');
                      }
                    }}
                    className="flex items-center gap-2 text-white font-semibold py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-600 transition-all text-sm"
                  >
                    <span>Explore Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Decorative Tag for Large Card */}
              {index === 0 && (
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg">
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