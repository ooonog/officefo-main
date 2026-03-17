import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const activities = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80', title: 'Gathering' },
  { id: 2, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80', title: 'Buka Bersama 2026' },
  { id: 3, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80', title: 'Latihan Lomba Kompetensi Siswa' },
  { id: 4, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80', title: 'Rapat Koordinasi' },
  { id: 5, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80', title: 'Bermain Bersama' },
];

export default function Community() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % activities.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="community" className="py-24 bg-[#FBFBFD] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Our Gallery</span>
        </div>
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Community Activities</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
          Momen kolaborasi dan inovasi yang terekam dalam perjalanan OFFICE FO.ID.
        </p>
      </div>

      {/* Highlight Slider Container */}
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center w-full max-w-6xl mx-auto pointer-events-none overflow-hidden">
        {activities.map((item, index) => {
          // Logika melingkar (circular math) untuk menentukan posisi relatif terhadap activeIndex
          const total = activities.length;
          let offset = (index - activeIndex + total) % total;
          if (offset > total / 2) offset -= total;

          // Penentuan nilai animasi berdasarkan posisi (tengah, kiri, kanan, tersembunyi)
          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;

          let x = '0%';
          let scale = 0.75;
          let opacity = 0;
          let zIndex = 0;

          if (isCenter) {
            x = '0%'; scale = 1; opacity = 1; zIndex = 20;
          } else if (isLeft) {
            x = '-60%'; scale = 0.85; opacity = 0.5; zIndex = 10;
          } else if (isRight) {
            x = '60%'; scale = 0.85; opacity = 0.5; zIndex = 10;
          } else {
            // Gambar sisanya disembunyikan di belakang layar
            x = offset < 0 ? '-100%' : '100%'; scale = 0.6; opacity = 0; zIndex = 0;
          }

          return (
            <motion.div
              key={item.id} // Kunci stabil: React tidak akan membongkar elemen ini lagi
              initial={false} // Menghindari animasi awal yang aneh saat website dimuat
              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.7, ease: "easeInOut" }} // Animasi lebih mulus dan ringan
              className="absolute w-[85%] md:w-[60%] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/50"
            >
              {/* Efek Kilau Kaca (Inner Reflection) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none z-10" />

              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-0" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="inline-block px-3 py-1 mb-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-sm">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">Featured</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}