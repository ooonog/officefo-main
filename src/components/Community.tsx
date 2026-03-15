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
    // Pastikan ID ini unik dan tidak ada di file lain
    <section id="community" className="relative py-24 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Klik tombol di bawah untuk melihat keseruan kegiatan kami.
        </p>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-700 transition-all active:scale-95"
        >
          <Camera size={20} /> Lihat Galeri Kegiatan
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl p-6 flex flex-col items-center justify-center"
            >
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"
              >
                <X size={40}/>
              </button>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full"
              >
                {activities.map(img => (
                  <div key={img.id} className="group rounded-xl overflow-hidden aspect-video relative shadow-2xl">
                    <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={img.title} />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-medium">{img.title}</p>
                    </div>
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