import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToNext = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{
          backgroundImage:
            'url(https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/DokumentasiFO/home1.JPG)',
        }}
      />

      {/* Overlay Gradient - Transisi ke warna section di bawahnya (#FBFBFD) agar seamless */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-[#FBFBFD] z-10" />

      {/* Kontainer Utama - Ditambahkan w-full, flex-col, dan items-center */}
      {/* class -mt-16 digunakan untuk mengangkat konten sedikit ke atas untuk mengimbangi Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center -mt-16"
      >
        {/* Logo (Kini Bergaya Glassy) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-28 h-28 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center shadow-2xl border border-white/40 overflow-hidden hover:scale-105 transition-transform duration-500">
            <img
              src="https://dfesvignkjryconnbidf.supabase.co/storage/v1/object/public/FotoFO/2%20(1).png"
              alt="OFFICE FO.ID Logo"
              className="w-full h-full object-contain p-4 drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
          OFFICE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FO.ID</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-md">
          <span className="font-bold text-white">Quality Over Quantity:</span> Membangun Talenta Digital Berkualitas untuk Masa Depan yang Lebih Baik.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button
            onClick={() => scrollToNext()}
            className="bg-white/10 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 tracking-wide uppercase text-sm"
          >
            Explore Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/70 group-hover:text-white transition-colors duration-300">
          Scroll
        </span>

        {/* Animasi memantul yang lebih halus (smooth) menggunakan Framer Motion */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg group-hover:bg-white group-hover:text-blue-600 transition-all duration-500"
        >
          <ChevronDown size={24} strokeWidth={2.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}