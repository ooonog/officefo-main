// src/components/Community.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';

const activities = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80', title: 'Tech Meetup' },
  { id: 2, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80', title: 'Gathering' },
];

export default function Community() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Klik tombol di bawah untuk melihat keseruan kegiatan kami.</p>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-700 transition-all"
        >
          <Camera size={20} /> Lihat Galeri Kegiatan
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center justify-center"
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white"><X size={40}/></button>
              <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {activities.map(img => (
                  <div key={img.id} className="rounded-xl overflow-hidden aspect-video">
                    <img src={img.url} className="w-full h-full object-cover" alt={img.title} />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}